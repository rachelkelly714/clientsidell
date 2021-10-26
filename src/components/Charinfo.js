

import React, { useState, useEffect } from "react";
import { Col, Row, Form, FormGroup, Label, Input, Button, InputGroup} from "reactstrap";
import CharacterComp from "./Charactercomp";

/****Assets****/

import './Assets/Charinfo.css'
import sword from './Assets/swordbglg.jpg'


/******Fetches******/

const Charinfo = (props) => {
  const [characterName, setCharacterName] = useState("");
  const [alignment, setAlignment] = useState("");
  const [playerName, setPlayerName] = useState("");
  const [level, parseLevel] = useState("");
  const [deity, setDeity] = useState("");
  const [race, setRace] = useState("");
  const [size, setSize] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [physicalDescription, setPhysicalDescription] = useState("");
  const [acItem, setAcItem] = useState("");
  const [acItemTwo, setAcItemTwo] = useState("");
  const [acItemThree, setAcItemThree] = useState("");
  const [acItemFour, setAcItemFour] = useState("");
  const [acItemFive, setAcItemFive] = useState("");
  const [shield, setShield] = useState("");
  const [strength, setStrength] = useState("");
  const [strengthModifier, setStrengthModifier] = useState("");
  const [dexterity, setDexterity] = useState("");
  const [dexterityModifier, setDexterityModifier] = useState("");
  const [constitution, setConstitution] = useState("");
  const [conModifier, setConModifier] = useState("")
  const [intelligence, setIntelligence] = useState("");
  const [intModifier, setIntModifier] = useState("");
  const [wisdom, setWisdom] = useState("");
  const [wisModifier, setWisModifier] = useState("");
  const [charisma, setCharisma] = useState("");
  const [charModifier, setCharModifier] = useState(""); 
  const [charInfo, setCharInfo] = useState([]);
  const [appraise, setAppraise] = useState("");
  const [acrobatics, setAcrobatics] = useState("");
  const [bluff, setBluff] = useState("");
  const [climb, setClimb] = useState("");
  const [craft, setCraft] = useState("");
  const [craftTwo, setCraftTwo] = useState("");
  const [diplomacy, setDiplomacy] = useState("");
  const [disableDevice, setDisableDevice] = useState("");
  const [disguise, setDisguise] = useState("");
  const [escapeArtist, setEscapeArtist] = useState("");
  const [fly, setFly] = useState("");
  const [handleAnimal, setHandleAnimal] = useState("");
  const [heal, setHeal] = useState("");
  const [intimidate, setIntimidate] = useState("");
  const [knowledgeArcana, setKnowledgeArcana] = useState("");
  const [knowledgeHistory, setKnowlegeHistory]  = useState("");
  const [knowledgeLocal, setKnowledgeLocal] = useState("");
  const [knowledgeReligion, setKnowledgeReligion] = useState("");
  const [knowledgeOther, setKnowledgeOther] = useState("");
  const [linguistics, setLinguistics] = useState("");
  const [perception, setPerception] = useState("");
  const [perform, setPerform] = useState("");
  const [profession, setProfession] = useState("");
  const [ride, setRide] = useState("");
  const [senseMotive, setSenseMotive] = useState("");
  const [sleightOfHand, setSleightOfHand] = useState("");
  const [stealth, setStealth] = useState("");
  const [spellcraft, setSpellcraft] = useState("");
  const [survival, setSurvival] = useState("");
  const [swim, setSwim] = useState("");
  const [useMagicDevice, setUseMagicDevice] = useState(""); 
  const [languages, setLanguages] = useState("");
  const [firstLevelSpells, setFirstLevelSpells] = useState("");
  const [secondLevelSpells, setSecondLevelSpells] = useState("");
  const [ thirdLevelSpells, setThirdLevelSpells] = useState("");             
  const [fourthLevelSpells, setFourthLevelSpells] = useState("");
  const [fifthLevelSpells, setFifthLevelSpells] = useState("");
  const [sixthLevelSpells, setSixthLevelSpells] = useState("");
  const [seventhLevelSpells, setSeventhLevelSpells] = useState("");
  const [eigthLevelSpells, setEigthLevelSpells] = useState("");
  const [ninthLevelSpells, setNinthLevelSpells] = useState("");
  const [weaponOne, setWeaponOne] = useState("");
  const [attackBonus, setAttackBonus] = useState("");
  const [criticalRange, setCriticalRange] = useState("");
  const [weaponType, setWeaponType] = useState("");
  const [range, setRange] = useState("");
  const [ammunition, setAmmunition] = useState("");
  const [damage, setDamage] = useState("")






  const fetchCharinfo = (e) => {
 
    console.log('fetching?')
    fetch("http://localhost:5500/charinfo/create", {
      method: "POST",
      body: JSON.stringify({
        charinfo: {
          characterName: characterName,
          playerName: playerName,
          alignment: alignment,
          level: level,
          deity: deity,
          race: race,
          size: size,
          gender: gender,
          age: age,
          height: height,
          weight: weight,
          physicalDescription: physicalDescription,
        },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${props.token}`,
      }),
    })
      .then((res) => res.json())
      .then((charinfoData) => {
        console.log(charinfoData);
       // setCharInfo(charinfoData);
      }).catch(err => console.log(err))
  };
  // useEffect(() => {
  //   fetchCharinfo();
  // }, []);

  
  const fetchGear = (e) => {
    e.preventDefault()
    console.log('working?')
    fetch("http://localhost:5500/gear/create", {
      method: "POST",
      body: JSON.stringify({
        gear: {
          acItem: acItem,
          acItemTwo: acItemTwo,
          acItemThree: acItemThree,
          acItemFour: acItemFour,
          acItemFive: acItemFive, 
          shield:shield
        },
        
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${props.token}`,
      }),
    })
    .then((res) => res.json())
    .then((gearData) => {
      console.log(gearData);
      // setGear(gearData);
    }).catch(err => console.log(err))
    
  }; 
  
  const fetchSpecs = (e) => {
    e.preventDefault()
    console.log('are you there?')
    fetch("http://localhost:5500/specs/create", {
      method: "POST",
      body: JSON.stringify({
        specs: {
          strength: strength,
          strengthModifier: strengthModifier,
          dexterity: dexterity,
          dexterityModifier: dexterityModifier,
          constitution: constitution,
          conModifier: conModifier,
          intelligence: intelligence,
          intModifier: intModifier,
          wisdom: wisdom,
          wisModifier: wisModifier,
          charisma: charisma,
          charModifier: charModifier, 
        },
        
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${props.token}`,
      }),
    })
    .then((res) => res.json())
    .then((specsData) => {
      console.log(specsData);
      // setGear(gearData);
    }).catch(err => console.log(err))
    
  }; 
  
  const fetchSkills = (e) => {
    e.preventDefault()
    console.log('are you there?')
    fetch("http://localhost:5500/skills/create", {
      method: "POST",
      body: JSON.stringify({
        skills: {
          appraise: appraise, 
          acrobatics: acrobatics, 
          bluff: bluff,
          climb: climb, 
          craft: craft, 
          craftTwo: craftTwo,
          diplomacy: diplomacy, 
          disableDevice: disableDevice, 
          disguise: disguise,
          escapeArtist: escapeArtist, 
          fly:fly, 
          handleAnimal: handleAnimal,
          heal: heal, 
          intimidate: intimidate, 
          knowledgeArcana: knowledgeArcana,
          knowledgeHistory: knowledgeHistory, 
          knowledgeLocal: knowledgeLocal, 
          knowledgeReligion: knowledgeReligion,
          knowledgeOther: knowledgeOther, 
          linguistics: linguistics, 
          perception: perception,
          perform: perform, 
          profession: profession, 
          ride: ride,
          senseMotive: senseMotive, 
          sleightOfHand: sleightOfHand, 
          stealth: stealth,
          spellcraft:spellcraft, 
          survival: survival, 
          swim: swim,
          useMagicDevice: useMagicDevice, 
          languages: languages
        },
        
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${props.token}`,
      }),
    })
    .then((res) => res.json())
    .then((skillsData) => {
      console.log(skillsData);
      // setGear(gearData);
    }).catch(err => console.log(err))
    
  };
  
  const fetchSpells = (e) => {
    e.preventDefault()
    console.log('abra cadabra?')
    fetch("http://localhost:5500/spells/create", {
      method: "POST",
      body: JSON.stringify({
        spells: {
          firstLevelSpells:firstLevelSpells,
          secondLevelSpells:secondLevelSpells,
          thirdLevelSpells:thirdLevelSpells,
          fourthLevelSpells:fourthLevelSpells,
          fifthLevelSpells:fifthLevelSpells,
          sixthLevelSpells:sixthLevelSpells,
          seventhLevelSpells:seventhLevelSpells,
          eigthLevelSpells:eigthLevelSpells,
          ninthLevelSpells:ninthLevelSpells
        },
        
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${props.token}`,
      }),
    })
    .then((res) => res.json())
    .then((spellsData) => {
      console.log(spellsData);
      // setGear(gearData);
    }).catch(err => console.log(err))
    
  }; 

  const fetchWeapon = (e) => {
    e.preventDefault()
    console.log('pew pew?')
    fetch("http://localhost:5500/weapon/create", {
      method: "POST",
      body: JSON.stringify({
        weapon: {
          weaponOne:weaponOne,
          attackBonus:attackBonus,
          criticalRange:criticalRange,
          weaponType:weaponType,
          range:range,
          ammunition:ammunition,
          damage:damage,
        },
        
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${props.token}`,
      }),
    })
    .then((res) => res.json())
    .then((weaponData) => {
      console.log(weaponData);
      // setGear(gearData);
    }).catch(err => console.log(err))
    
  }; 



  /*******************************************/


  /****Inline Styling******/

  const buttonStyles = {
    marginTop: '10px'
  }

  const h3Styles = {
  
    color: 'white',
    textAlign: 'center',
  
  }

      const formStylesCI = {
        backgroundColor: 'rgba(246, 36, 89, .7)'


      }

      const gearStyles = {
        backgroundColor: 'rgba(30, 130, 76, .7)'
      }
      
      const abilityStyles = {
        backgroundColor: 'rgba(155, 89, 182, .7)',
        width: '300px'

      }


      const skillStyles = {
        backgroundColor: 'rgba(247, 202, 24, .7)',
        width: '350px'        
      }

      const spellStyles = {
        backgroundColor: 'rgba(108, 122, 137, .7)'
      }


      const weaponStyles = {
        backgroundColor: 'rgba(241, 90, 34, .7)'
      }


      const h1Styles = {
        color: 'white',
        position: 'center',
        textAlign: 'center',
        marginTop: '50px',
        
      }

    const inputStyles = {
       marginLeft: '5px'
    }
    
    const inputStylesTwo = {
      flexDirection: 'row',
      float: 'right'
    }

      /*****************************************************/    





/**********Forms***********/


  return (
    <>
         <h1 style={h1Styles}>Character Sheet</h1>

         {/******Character Attributes******** */}
      
      <Form onSubmit={fetchCharinfo} style={formStylesCI}>
      <h3 style={h3Styles}>Character Information</h3>
        <FormGroup>
          <Label htmlFor="Name">Character Name</Label>
          <Input style={inputStyles}
            name="characterName"
            value={characterName}
            onChange={(e) => setCharacterName(e.target.value)}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="playerName">Player Name</Label>
          <Input style={inputStyles}
            name="playerName"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="alignment">Alignment</Label>
          <Input style={inputStyles}
            name="alignment"
            value={alignment}
            onChange={(e) => setAlignment(e.target.value)}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="level">Level</Label>
          <Input style={inputStyles}
            name="level"
            value={level}
            onChange={(e) => parseLevel(e.target.value)}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="deity">Deity</Label>
          <Input style={inputStyles}
            name="deity"
            value={deity}
            onChange={(e) => setDeity(e.target.value)}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="race">Race</Label>
          <Input style={inputStyles}
            name="race"
            value={race}
            onChange={(e) => setRace(e.target.value)}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="size">Size</Label>
          <Input style={inputStyles}
            name="size"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="gender">Gender</Label>
          <Input style={inputStyles}
            name="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="age">Age</Label>
          <Input style={inputStyles}
            name="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="height">Height</Label>
          <Input style={inputStyles}
            name="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="weight">Weight</Label>
          <Input style={inputStyles}
            name="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="physicalDescription">Physical Description</Label>
          <Input style={inputStyles}
            name="physicalDescription"
            value={physicalDescription}
            onChange={(e) => setPhysicalDescription(e.target.value)}
          ></Input>
        </FormGroup>
    
        <Button style={buttonStyles} type="submit">Save</Button>
      </Form>

         {/*******Gear******** */}

      <Form onSubmit={fetchGear} style={gearStyles}>
      <h3 style={h3Styles}>Gear</h3>
        <FormGroup>
          <Label htmlFor="Name"></Label>
          <Input style={inputStyles}
            name="acItem"
            value={acItem}
            onChange={(e) => setAcItem(e.target.value)}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="acItemTwo"></Label>
          <Input style={inputStyles}
            name="acItemTwo"
            value={acItemTwo}
            onChange={(e) => setAcItemTwo(e.target.value)}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="acItemThree"></Label>
          <Input style={inputStyles}
            name="acItemThree"
            value={acItemThree}
            onChange={(e) => setAcItemThree(e.target.value)}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="acItemFour"></Label>
          <Input style={inputStyles}
            name="acItemFour"
            value={acItemFour}
            onChange={(e) => setAcItemFour(e.target.value)}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="acItemFive"></Label>
          <Input style={inputStyles}
            name="acItemFive"
            value={acItemFive}
            onChange={(e) => setAcItemFive(e.target.value)}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="shield">Shield</Label>
          <Input style={inputStyles}
            name="shield"
            value={shield}
            onChange={(e) => setShield(e.target.value)}
          ></Input>
        </FormGroup>
        <Button style={buttonStyles} type="submit">Save</Button>
      </Form>

      {/*******Ability Scores******** */}

      <Form onSubmit={fetchSpecs} style={abilityStyles}>
        <h3 style={h3Styles}>Ability Stats</h3>
          <Row>
           <Col md={3}>
          <FormGroup inline>
            <Label  htmlFor="strength">Strength</Label>
            <Input style={inputStyles}
            name="strength" 
            value={strength}
            onChange={(e) => setStrength(e.target.value)}
            />
            </FormGroup>
            </Col>
            <Col md={3}>
            <FormGroup>
            <Label  htmlFor="strMod">Str Mod</Label>
            <Input style={inputStyles}
            name="strengthModifier" 
            value={strengthModifier}
            onChange={(e) => setStrengthModifier(e.target.value)}
            />
          </FormGroup>
          </Col>
          </Row>

     
    
          <FormGroup>
            <Label  htmlFor="dexterity">Dexterity</Label>
            <Input   style={inputStyles}
            name="dexterity" 
            value={dexterity}
            onChange={(e) => setDexterity(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label  htmlFor="dexterityMod">Dex Modifier</Label>
            <Input  style={inputStyles}
            name="dexterityModifier" 
            value={dexterityModifier}
            onChange={(e) => setDexterityModifier(e.target.value)}
            />
          </FormGroup>
     
          <FormGroup>
            <Label  htmlFor="constitution">Constitution</Label>
            <Input style={inputStyles}
            name="constitution" 
            value={constitution}
            onChange={(e) => setConstitution(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label  htmlFor="constitution modifier">Con Modifier</Label>
            <Input  style={inputStyles}
            name="conModifier" 
            value={conModifier}
            onChange={(e) => setConModifier(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label  htmlFor="intelligence">Intelligence</Label>
            <Input style={inputStyles}  
            name="intelligence" 
            value={intelligence}
            onChange={(e) => setIntelligence(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label  htmlFor="intelligence Modifier">Int Modifier</Label>
            <Input   style={inputStyles}
            name="intModifier" 
            value={intModifier}
            onChange={(e) => setIntModifier(e.target.value)}
            />
          </FormGroup>
  
          <FormGroup>
            <Label  htmlFor="wisdom">Wisdom</Label>
            <Input style={inputStyles}
            name="wisdom" 
            value={wisdom}
            onChange={(e) => setWisdom(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label  htmlFor="wisdom modifier">Wis Modifier</Label>
            <Input style={inputStyles}
            name="wisModifier" 
            value={wisModifier}
            onChange={(e) => setWisModifier(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label  htmlFor="charisma">Charisma</Label>
            <Input style={inputStyles}
            name="charisma" 
            value={charisma}
            onChange={(e) => setCharisma(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label  htmlFor="charisma modifier">Chr Modifier</Label>
            <Input style={inputStyles}
            name="charModifier" 
            value={charModifier}
            onChange={(e) => setCharModifier(e.target.value)}
            />
          </FormGroup>

          <Button style={buttonStyles} type="submit">Save</Button>
      </Form> 


       {/*******Skills******** */}


      <Form onSubmit={fetchSkills} style={skillStyles}>
             <Row>
         <h3 style={h3Styles}>Skills</h3>

        <InputGroup>
            <Label htmlFor="appraise">Appraise:</Label>
            <Col md={2}>
              <Input 
              placeholder = "rank"
              name = "appraise"
              value={appraise}
              onChange={(e) => setAppraise(e.target.value)}
              /></Col>
        </InputGroup>

          {/*********/}

        <InputGroup>
        <Label htmlFor="acrobatics">Acrobatics:</Label>
        <Col md={2}>
              <Input 
              placeholder = "rank"
              name = "acrobatics"
              value={acrobatics}
              onChange={(e) => setAcrobatics(e.target.value)}
            /></Col>
        </InputGroup>

        {/**********/}

        <InputGroup>
        <Label htmlFor="sleight of hand">Sleight of Hand:</Label>
             <Col md={2}>
              <Input
              placeholder = "rank"
              name = "sleightOfHand"
              value={sleightOfHand}
              onChange={(e) => setSleightOfHand(e.target.value)}
              /></Col>
        </InputGroup>

        {/***********/}

        <InputGroup>
        <Label htmlFor="Stealth">Stealth:</Label>
             <Col md={2}>
              <Input
              placeholder = "rank"
              name = "stealth"
              value={stealth}
              onChange={(e) => setStealth(e.target.value)}
              /></Col>
    
        </InputGroup>

          {/***********/}

        <InputGroup>
        <Label htmlFor="knowledge Arcana">Knowledge Arcana:</Label>
             <Col md={2}>
              <Input 
              placeholder = "rank"
              name = "knowledgeArcana"
              value={knowledgeArcana}
              onChange={(e) => setKnowledgeArcana(e.target.value)}
              /></Col>
        </InputGroup>

        {/*********/}

        <InputGroup>
        <Label htmlFor="knowledge history">Knowledge History:</Label>
        <Col md={2}>
              <Input 
              placeholder = "rank" 
              name = "knowledgeHistory"
              value={knowledgeHistory}
              onChange={(e) => setKnowlegeHistory(e.target.value)}
              /></Col>
        </InputGroup>

         {/*********/}

        <InputGroup>
        <Label htmlFor="bluff">Bluff:</Label>
        <Col md={2}>
              <Input
              placeholder = "rank"
              name = "bluff"
              value={bluff}
              onChange={(e) => setBluff(e.target.value)}
              /></Col>
        </InputGroup>
 
        {/*********/}  

        <InputGroup>
        <Label htmlFor="climb">Climb:</Label>
        <Col md={2}>
              <Input
              placeholder = "rank"
              name = "climb"
              value={climb}
              onChange={(e) => setClimb(e.target.value)}
              /></Col>
        </InputGroup>

        {/*********/}

        <InputGroup>
        <Label htmlFor="knowlege religion">Knowledge Religon:</Label>
        <Col md={2}>
              <Input 
              placeholder = "rank"
              name = "knowledgeReligion"
              value={knowledgeReligion}
              onChange={(e) => setKnowledgeReligion(e.target.value)}
              /></Col>
        </InputGroup>

        {/********/}

        <InputGroup>
        
        <Label htmlFor="Animal Handling">Animal Handling:</Label>
        <Col md={2}>
              <Input 
              placeholder = "rank"
              name = "handleAnimal"
              value={handleAnimal}
              onChange={(e) => setHandleAnimal(e.target.value)}
              /></Col>
        </InputGroup>

        {/********/}

        <InputGroup>
        <Label htmlFor="craft">Craft:</Label>
        <Col md={2}>
              <Input 
              placeholder = "rank"
              name = "craft"
              value={craft}
              onChange={(e) => setCraft(e.target.value)}
              /></Col>
        </InputGroup>

      {/*********/}

        <InputGroup>
        <Label htmlFor="craft two">Craft Two:</Label>
        <Col md={2}>
              <Input 
              placeholder = "rank"
              name = "craftTwo"
              value={craftTwo}
              onChange={(e) => setCraftTwo(e.target.value)}
              /></Col>
        </InputGroup>

         {/**********/}

        <InputGroup>
        <Label htmlFor="survival">Survival:</Label>
        <Col md={2}>
              <Input 
              placeholder = "rank"
              name = "survival"
              value={survival}
              onChange={(e) => setSurvival(e.target.value)}
              /></Col> 
        </InputGroup>

           {/***********/}

        <InputGroup>
        <Label htmlFor="diplomacy">Diplomacy:</Label>
        <Col md={2}>
              <Input 
              placeholder = "rank"
              name = "diplomacy"
              value={diplomacy}
              onChange={(e) => setDiplomacy(e.target.value)}
              /></Col>
        </InputGroup>

          {/**********/}

        <InputGroup>
        <Label htmlFor="intimidate">Intimidate:</Label>
        <Col md={2}>
              <Input 
              placeholder = "rank"
              name = "intimidate"
              value={intimidate}
              onChange={(e) => setIntimidate(e.target.value)}
              /></Col>
        </InputGroup>

       {/*********/}

        <InputGroup>
        <Label htmlFor="perform">Perform:</Label>
        <Col md={2}>
              <Input 
              placeholder = "rank"
              name = "perform"
              value={perform}
              onChange={(e) => setPerform(e.target.value)}
              /></Col>
        </InputGroup>

       {/***********/}

        <InputGroup>
        <Label htmlFor="disable device">Disable Device:</Label>
        <Col md={2}>
              <Input 
              placeholder = "rank" 
              name = "disable device"
              value={disableDevice}
              onChange={(e) => setDisableDevice(e.target.value)}
              /></Col>
        </InputGroup>

         {/***********/}

         <InputGroup>
        <Label htmlFor="disguise">Disguise:</Label>
        <Col md={2}>
              <Input 
              placeholder = "rank" 
              name = "disguise"
              value={disguise}
              onChange={(e) => setDisguise(e.target.value)}
              /></Col>
        </InputGroup>

         {/***********/}

         <InputGroup>
        <Label htmlFor="Escape Artist">Escape Artist:</Label>
        <Col md={2}>
              <Input 
              placeholder = "rank"
              name = "escapeArtist"
              value={escapeArtist}
              onChange={(e) => setEscapeArtist(e.target.value)}
              /></Col>
        </InputGroup>

         {/***********/}

         <InputGroup>
        <Label htmlFor="fly">Fly:</Label>
        <Col md={2}>
              <Input 
              placeholder = "rank" 
              name = "fly"
              value={fly}
              onChange={(e) => setFly(e.target.value)}
              /></Col>
        </InputGroup>

         {/***********/}

         <InputGroup>
        <Label htmlFor="heal">Heal:</Label>
        <Col md={2}>
              <Input 
              placeholder = "rank"
              name = "heal"
              value={heal}
              onChange={(e) => setHeal(e.target.value)}
              /></Col>
        </InputGroup>

         {/***********/}

         <InputGroup>
        <Label htmlFor="knowledge local">Knowledge Local:</Label>
        <Col md={2}>
              <Input 
              placeholder = "rank"
              name = "knowledgeLocal"
              value={knowledgeLocal}
              onChange={(e) => setKnowledgeLocal(e.target.value)}
              /></Col>
        </InputGroup>

         {/***********/}

         <InputGroup>
        <Label htmlFor="knowledge other">Knowledge Other:</Label>
        <Col md={2}>
              <Input 
              placeholder = "rank"
              name = "knowledgeOther"
              value={knowledgeOther}
              onChange={(e) => setKnowledgeOther(e.target.value)}
              /></Col>
        </InputGroup>

         {/***********/}

         <InputGroup>
        <Label htmlFor="linguistics">Linguistics:</Label>
        <Col md={2}>
              <Input 
              placeholder = "rank" 
              name = "linguistics"
              value={linguistics}
              onChange={(e) => setLinguistics(e.target.value)}
              /></Col>
        </InputGroup>

         {/***********/}

         <InputGroup>
        <Label htmlFor="perception">Perception:</Label>
        <Col md={2}>
              <Input 
              placeholder = "rank" 
              name = "disable device"
              value={perception}
              onChange={(e) => setPerception(e.target.value)}
              /></Col>
        </InputGroup>

         {/***********/}

         <InputGroup>
        <Label htmlFor="profession">Profession:</Label>
        <Col md={2}>
              <Input 
              placeholder = "rank"
              name = "profession"
              value={profession}
              onChange={(e) => setProfession(e.target.value)}
              /></Col>
        </InputGroup>

         {/***********/}

         <InputGroup>
        <Label htmlFor="ride">Ride:</Label>
        <Col md={2}>
              <Input 
              placeholder = "rank"
              name = "ride"
              value={ride}
              onChange={(e) => setRide(e.target.value)}
              /></Col>
        </InputGroup>

         {/***********/}

         <InputGroup>
        <Label htmlFor="sense motive">Sense Motive:</Label>
        <Col md={2}>
              <Input 
              placeholder = "rank"
              name = "senseMotive"
              value={senseMotive}
              onChange={(e) => setSenseMotive(e.target.value)}
              /></Col>
        </InputGroup>

         {/***********/}

         <InputGroup>
        <Label htmlFor="spellcraft">Spellcraft:</Label>
        <Col md={2}>
              <Input 
              placeholder = "rank" 
              name = "spellcraft"
              value={spellcraft}
              onChange={(e) => setSpellcraft(e.target.value)}
              /></Col>
        </InputGroup>

         {/***********/}

         <InputGroup>
        <Label htmlFor="swim">Swim:</Label>
        <Col md={2}>
              <Input 
              placeholder = "rank"
              name = "swim"
              value={swim}
              onChange={(e) => setSwim(e.target.value)}
              /></Col>
        </InputGroup>

         {/***********/}

         <InputGroup>
        <Label htmlFor="use magic device">Use Magic Device:</Label>
        <Col md={2}>
              <Input 
              placeholder = "rank"
              name = "disable device"
              value={useMagicDevice}
              onChange={(e) => setUseMagicDevice(e.target.value)}
              /></Col>
        </InputGroup>

         {/***********/}

         <InputGroup>
        <Label htmlFor="languages">Languages:</Label>
              <Input 
               type="text"
               placeholder = "Elven, Common, Orcish, ect"
              name = "languages"
              value={languages}
              onChange={(e) => setLanguages(e.target.value)}
              />
        </InputGroup>

         {/***********/}
        </Row>   
        <Button style={buttonStyles} type="submit">Save</Button>
        </Form> 

            {/*******Weapon*********/}
           
            <Form onSubmit={fetchWeapon} style={weaponStyles}>
             <Row>
         <h3 style={h3Styles}>Weapon</h3>

        <InputGroup>
            <Label htmlFor="Weapon">Weapon:</Label>
            <Col md={8}>
              <Input style={inputStyles}
              placeholder = "weapon"
              name = "weaponOne"
              value={weaponOne}
              onChange={(e) => setWeaponOne(e.target.value)}
              /></Col>
        </InputGroup>

          {/*********/}

        <InputGroup>
        <Label htmlFor="attack bonus">Attack Bonus:</Label>
        <Col md={8}>
              <Input style={inputStyles}
              placeholder = "attack bonus"
              name = "attackBonus"
              value={attackBonus}
              onChange={(e) => setAttackBonus(e.target.value)}
            /></Col>
        </InputGroup>

        {/**********/}

        <InputGroup>
        <Label htmlFor="critical range">Critical Range:</Label>
             <Col md={8}>
              <Input style={inputStyles}
              placeholder = "critical range"
              name = "criticalRange"
              value={criticalRange}
              onChange={(e) => setCriticalRange(e.target.value)}
              /></Col>
        </InputGroup>

        {/***********/}

        <InputGroup>
        <Label htmlFor="Weapon Type">Weapon Type:</Label>
             <Col md={8}>
              <Input style={inputStyles}
              placeholder = "weapon type"
              name = "weaponType"
              value={weaponType}
              onChange={(e) => setWeaponType(e.target.value)}
              /></Col>
        </InputGroup>

          {/***********/}

        <InputGroup>
        <Label htmlFor="range">Range:</Label>
             <Col md={8}>
              <Input style={inputStyles}
              placeholder = "weapon range"
              name = "range"
              value={range}
              onChange={(e) => setRange(e.target.value)}
              /></Col>
        </InputGroup>

        {/*********/}

        <InputGroup>
        <Label htmlFor="ammunition">Ammunition:</Label>
        <Col md={8}>
              <Input style={inputStyles}
              placeholder = "ammunition" 
              name = "ammunition"
              value={ammunition}
              onChange={(e) => setAmmunition(e.target.value)}
              /></Col>
        </InputGroup>

         {/*********/}

        <InputGroup>
        <Label htmlFor="damage">Damage:</Label>
        <Col md={8}>
              <Input style={inputStyles}
              placeholder = "damage"
              name = "damage"
              value={damage}
              onChange={(e) => setDamage(e.target.value)}
              /></Col>
        </InputGroup>
        </Row> 
        <Button style={buttonStyles} type="submit">Save</Button>  
        </Form> 

        {/****Spells*****/}
        <Form onSubmit={fetchSpells} style={spellStyles}>
             <Row>
         <h3 style={h3Styles}>Spells</h3>

        <InputGroup>
            <Label htmlFor="First Level Spells">First Lvl Spells:</Label>
            <Col md={8}>
              <Input 
              placeholder = "first level spells"
              name = "firstLevelSpells"
              value={firstLevelSpells}
              onChange={(e) => setFirstLevelSpells(e.target.value)}
              /></Col>
        </InputGroup>

          {/*********/}

        <InputGroup>
        <Label htmlFor="second level spells">Second Lvl Spells:</Label>
        <Col md={8}>
              <Input
              placeholder = "second level spells"
              name = "secondLevelSpells"
              value={secondLevelSpells}
              onChange={(e) => setSecondLevelSpells(e.target.value)}
            /></Col>
        </InputGroup>

        {/**********/}

        <InputGroup>
        <Label htmlFor="third level spells">Third Lvl Spells:</Label>
             <Col md={8}>
              <Input
              placeholder = "third level spells"
              name = "thirdLevelSpells"
              value={thirdLevelSpells}
              onChange={(e) => setThirdLevelSpells(e.target.value)}
              /></Col>
        </InputGroup>

        {/***********/}

        <InputGroup>
        <Label htmlFor="Fourth Level Spells">Fourth Lvl Spells:</Label>
             <Col md={8}>
              <Input
              placeholder = "fourth level spells"
              name = "fourthLevelSpells"
              value={fourthLevelSpells}
              onChange={(e) => setFourthLevelSpells(e.target.value)}
              /></Col>
        </InputGroup>

          {/***********/}

        <InputGroup>
        <Label htmlFor="Fifth Level Spells">Fifth Lvl Spells:</Label>
             <Col md={8}>
              <Input 
              placeholder = "fifth level spells"
              name = "fifthLevelSpells"
              value={fifthLevelSpells}
              onChange={(e) => setFifthLevelSpells(e.target.value)}
              /></Col>
        </InputGroup>

        {/*********/}

        <InputGroup>
        <Label htmlFor="Sixth Level Spells">Sixth Lvl Spells:</Label>
        <Col md={8}>
              <Input 
              placeholder = "sixth level spells" 
              name = "sixthLevelSpells"
              value={sixthLevelSpells}
              onChange={(e) => setSixthLevelSpells(e.target.value)}
              /></Col>
        </InputGroup>

         {/*********/}

        <InputGroup>
        <Label htmlFor="Seventh Level Spells">Seventh Lvl Spells:</Label>
        <Col md={8}>
              <Input
              placeholder = "seventh level spells"
              name = "seventhLevelSpells"
              value={seventhLevelSpells}
              onChange={(e) => setSeventhLevelSpells(e.target.value)}
              /></Col>
        </InputGroup>
 
        {/*********/}  

        <InputGroup>
        <Label htmlFor="Eighth Level Spells">Eighth Lvl Spells:</Label>
        <Col md={8}>
              <Input
              placeholder = "eighth level spells"
              name = "eighthLevelSpells"
              value={eigthLevelSpells}
              onChange={(e) => setEigthLevelSpells(e.target.value)}
              /></Col>
        </InputGroup>

        {/*********/}

        <InputGroup>
        <Label htmlFor="Ninth Level Spells">Ninth Lvl Spells:</Label>
        <Col md={8}>
              <Input 
              placeholder = "ninth level spells"
              name = "ninthLevelSpells"
              value={ninthLevelSpells}
              onChange={(e) => setNinthLevelSpells(e.target.value)}
              /></Col>
        </InputGroup>
        </Row>  
        <Button style={buttonStyles} type="submit">Save</Button> 
        </Form> 
      

        <img src={sword} alt="sword background"/>
    </>
  );
};

export default Charinfo;
