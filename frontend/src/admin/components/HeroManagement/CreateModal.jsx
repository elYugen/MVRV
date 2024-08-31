import React, { useState } from 'react';
import axios from 'axios';
import styles from './HeroManagement.module.css';

function CreateModal({ closeModal, onCreate }) {
    const [hero, setHero] = useState({
        name: '',
        sprite: '',
        icon: '',
        tier: '',
        health: '',
        difficulty: '',
        category: '',
        passivename: [],
        passive: [{ name: '', description: '' }],
        spellsname: [],
        spells: [{ name: '', description: '' }]
    });
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        if (name.startsWith('passive_')) {
            const [_, field, index] = name.split('_');
            const idx = parseInt(index, 10);
            setHero(prevHero => {
                const updatedPassive = [...prevHero.passive];
                updatedPassive[idx] = { ...updatedPassive[idx], [field]: value };
                return { ...prevHero, passive: updatedPassive };
            });
        } else if (name.startsWith('spell_')) {
            const [_, field, index] = name.split('_');
            const idx = parseInt(index, 10);
            setHero(prevHero => {
                const updatedSpells = [...prevHero.spells];
                updatedSpells[idx] = { ...updatedSpells[idx], [field]: value };
                return { ...prevHero, spells: updatedSpells };
            });
        } else if (name === 'passivename') {
            setHero(prevHero => ({
                ...prevHero,
                passivename: value.split(',').map(item => item.trim()).filter(item => item)
            }));
        } else if (name === 'spellsname') {
            setHero(prevHero => ({
                ...prevHero,
                spellsname: value.split(',').map(item => item.trim()).filter(item => item)
            }));
        } else {
            setHero(prevHero => ({
                ...prevHero,
                [name]: value
            }));
        }
    };

    const handleAddPassive = () => {
        setHero(prevHero => ({
            ...prevHero,
            passive: [...prevHero.passive, { name: '', description: '' }]
        }));
    };

    const handleRemovePassive = (index) => {
        setHero(prevHero => ({
            ...prevHero,
            passive: prevHero.passive.filter((_, i) => i !== index)
        }));
    };

    const handleAddSpell = () => {
        setHero(prevHero => ({
            ...prevHero,
            spells: [...prevHero.spells, { name: '', description: '' }]
        }));
    };

    const handleRemoveSpell = (index) => {
        setHero(prevHero => ({
            ...prevHero,
            spells: prevHero.spells.filter((_, i) => i !== index)
        }));
    };

    const handleSave = () => {
        if (!hero.name || !hero.sprite || !hero.icon || !hero.tier || !hero.health || !hero.difficulty || !hero.category) {
            setError('Veuillez remplir tous les champs requis.');
            return;
        }
    
        // Formatage des données
        const formattedHero = {
            name: hero.name.trim(),
            sprite: hero.sprite.trim(),
            icon: hero.icon.trim(),
            tier: hero.tier.trim(),
            health: Number(hero.health),
            difficulty: Number(hero.difficulty),
            category: hero.category.trim(),
            passivename: hero.passivename.map(name => name.trim()),
            passive: hero.passive.map(p => ({
                name: p.name.trim(),
                description: p.description.trim()
            })),
            spellsname: hero.spellsname.map(name => name.trim()),
            spells: hero.spells.map(s => ({
                name: s.name.trim(),
                description: s.description.trim()
            })),
        };
    
        // Envoi des données
        axios.post('http://localhost:5555/heros', formattedHero)
            .then(() => {
                onCreate();
                closeModal();
            })
            .catch(error => {
                console.error('Erreur lors de la création du héros:', error);
                setError('Erreur lors de la création.');
            });
    };

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <span className={styles.close} onClick={closeModal}>&times;</span>
                <div className={styles.modalBody}>
                    {error && <div className={styles.error}>{error}</div>}
                    <div className={styles.formGroup}>
                        <label>Nom</label>
                        <input type="text" name="name" value={hero.name} onChange={handleChange} />
                    </div>
                    <div className={styles.formGroup}>
                        <label>Sprite</label>
                        <input type="text" name="sprite" value={hero.sprite} onChange={handleChange} />
                    </div>
                    <div className={styles.formGroup}>
                        <label>Icône</label>
                        <input type="text" name="icon" value={hero.icon} onChange={handleChange} />
                    </div>
                    <div className={styles.formGroup}>
                        <label>Tier</label>
                        <input type="text" name="tier" value={hero.tier} onChange={handleChange} />
                    </div>
                    <div className={styles.formGroup}>
                        <label>Santé</label>
                        <input type="number" name="health" value={hero.health} onChange={handleChange} />
                    </div>
                    <div className={styles.formGroup}>
                        <label>Difficulté</label>
                        <input type="number" name="difficulty" value={hero.difficulty} onChange={handleChange} />
                    </div>
                    <div className={styles.formGroup}>
                        <label>Catégorie</label>
                        <input type="text" name="category" value={hero.category} onChange={handleChange} />
                    </div>
                    <div className={styles.formGroup}>
                        <label>Passifs (noms séparés par des virgules)</label>
                        <input type="text" name="passivename" value={hero.passivename.join(', ')} onChange={handleChange} />
                    </div>
                    <div className={styles.formGroup}>
                        <label>Passifs (détails)</label>
                        {hero.passive.map((p, i) => (
                            <div key={i} className={styles.passiveGroup}>
                                <input type="text" name={`passive_name_${i}`} placeholder={`Passif ${i + 1} Nom`} value={p.name} onChange={handleChange}/>
                                <input type="text" name={`passive_description_${i}`} placeholder={`Passif ${i + 1} Description`} value={p.description} onChange={handleChange}/>
                                <button type="button" onClick={() => handleRemovePassive(i)} className={styles.UserButton}>Supprimer</button>
                            </div>
                        ))}
                        <button type="button" onClick={handleAddPassive} className={styles.UserButton}>Ajouter un passif</button>
                    </div>
                    <div className={styles.formGroup}>
                        <label>Sorts (noms séparés par des virgules)</label>
                        <input type="text" name="spellsname" value={hero.spellsname.join(', ')} onChange={handleChange} />
                    </div>
                    <div className={styles.formGroup}>
                        <label>Sorts (détails)</label>
                        {hero.spells.map((s, i) => (
                            <div key={i} className={styles.spellGroup}>
                                <input
                                    type="text"
                                    name={`spell_name_${i}`}
                                    placeholder={`Sort ${i + 1} Nom`}
                                    value={s.name}
                                    onChange={handleChange}
                                />
                                <input type="text" name={`spell_description_${i}`} placeholder={`Sort ${i + 1} Description`} value={s.description} onChange={handleChange}/>
                                <button type="button" onClick={() => handleRemoveSpell(i)} className={styles.UserButton}>Supprimer</button>
                            </div>
                        ))}
                        <button type="button" onClick={handleAddSpell} className={styles.UserButton}>Ajouter un sort</button>
                    </div>
                    <button onClick={handleSave} className={styles.saveButton}>Créer</button>
                    <button onClick={closeModal} className={styles.cancelButton}>Annuler</button>
                </div>
            </div>
        </div>
    );
}

export default CreateModal;
