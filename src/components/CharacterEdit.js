import React, {useState} from 'react'; 

const WorkoutEdit = (props) => {

const [editCharinfo, setEditCharinfo] = useState(props.characterToUpdate.charinfo);
const [editGear, setEditGear] = useState(props.characterToUpdate.gear); 
const [editSpecs, setEditSpecs] = useState(props.characterToUpdate.specs);
const [editSkills, setEditSkills] = useState(props.characterToUpdate.skills)
const [editSpells, setEditSpells] = useState(props.characterToUpdate.spells)
const [editWeapon, setEditWeapon] = useState(props.characterToUpdate.weapon)

}