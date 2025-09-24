const myAPI = "https://hp-api.onrender.com/api/characters"; 

 const container = document.getElementById("container1");

    container.innerHTML = "";

    

    fetch(myAPI)
    .then(response => response.json())
    .then(data => {

        
        var value = inputField.value.toLowerCase();

        data.forEach(element => {
            let finnes = true;
        
            for (let i = 0; i < value.length; i++) {
                // console.log(value[i]);
                if (value[i] !== element.name[i].toLowerCase()) {

                    finnes = false;
                }
            }
        
            if (finnes == true) {

                const characterDiv = document.createElement("div");

                const name = document.createElement("p");
                name.innerText = element.name;
                characterDiv.appendChild(name);
    
                const actor = document.createElement("p");
                actor.innerText = element.actor;
                characterDiv.appendChild(actor);
    
                if (element.alive == true) {
                    const aliveTrue = document.createElement("p");
                    aliveTrue.innerText = "Alive: Yes";
                    characterDiv.appendChild(aliveTrue);
                } else {
                    const aliveFalse = document.createElement("p");
                    aliveFalse.innerText = "Alive: No";
                    characterDiv.appendChild(aliveFalse);
                }

                const gender = document.createElement("p");
                gender.innerText = "Gender: " + element.gender;
                characterDiv.appendChild(gender);

                const house = document.createElement("p");
                house.innerText = "house: " + element.house;
                characterDiv.appendChild(house);
                
                if (element.hogwartsStudent == true) {
                    const hogwartsStudent = document.createElement("p");
                    hogwartsStudent.innerText = "Student: Yup";
                    characterDiv.appendChild(hogwartsStudent);
                } else {
                    const hogwartsStudent = document.createElement("p");
                    hogwartsStudent.innerText = "Student: Nope";
                    characterDiv.appendChild(hogwartsStudent);
                }

                if (element.wizard == true) {
                    const wizard = document.createElement("p");
                    wizard.innerText = "Is a wizard";
                    characterDiv.appendChild(wizard);
                } else {
                    const wizard = document.createElement("p");
                    wizard.innerText = "Is not a wizard";
                    characterDiv.appendChild(wizard);
                }

                const ancestry = document.createElement("p");
                ancestry.innerText = "ancestry: " + element.ancestry;
                characterDiv.appendChild(ancestry);

                const dateOfBirth = document.createElement("p");
                dateOfBirth.innerText = "date of birth: " + element.dateOfBirth;
                characterDiv.appendChild(dateOfBirth);
                

                if (element.image == "") {
                    const image = document.createElement("img");
                    image.src = "bilde/avatar.png";
                    characterDiv.appendChild(image);
                    
                } else {
                    const image = document.createElement("img");
                    image.src = element.image;
                    characterDiv.appendChild(image);       
                }
    
                container.appendChild(characterDiv);
            }
        
        });                
        
    });


const inputField = document.getElementById("myInput");
inputField.addEventListener("input", function() {

    const container = document.getElementById("container1");

    container.innerHTML = "";

    

    fetch(myAPI)
    .then(response => response.json())
    .then(data => {

        
        var value = inputField.value.toLowerCase();

        data.forEach(element => {
            let finnes = true;
        
            for (let i = 0; i < value.length; i++) {
                // console.log(value[i]);
                if (value[i] !== element.name[i].toLowerCase()) {

                    finnes = false;
                }
            }
        
            if (finnes == true) {

                const characterDiv = document.createElement("div");

                const name = document.createElement("p");
                name.innerText = element.name;
                characterDiv.appendChild(name);
    
                const actor = document.createElement("p");
                actor.innerText = element.actor;
                characterDiv.appendChild(actor);
    
                if (element.alive == true) {
                    const aliveTrue = document.createElement("p");
                    aliveTrue.innerText = "Alive: Yes";
                    characterDiv.appendChild(aliveTrue);
                } else {
                    const aliveFalse = document.createElement("p");
                    aliveFalse.innerText = "Alive: No";
                    characterDiv.appendChild(aliveFalse);
                }

                const gender = document.createElement("p");
                gender.innerText = "Gender: " + element.gender;
                characterDiv.appendChild(gender);

                const house = document.createElement("p");
                house.innerText = "house: " + element.house;
                characterDiv.appendChild(house);
                
                if (element.hogwartsStudent == true) {
                    const hogwartsStudent = document.createElement("p");
                    hogwartsStudent.innerText = "Student: Yup";
                    characterDiv.appendChild(hogwartsStudent);
                } else {
                    const hogwartsStudent = document.createElement("p");
                    hogwartsStudent.innerText = "Student: Nope";
                    characterDiv.appendChild(hogwartsStudent);
                }

                if (element.wizard == true) {
                    const wizard = document.createElement("p");
                    wizard.innerText = "Is a wizard";
                    characterDiv.appendChild(wizard);
                } else {
                    const wizard = document.createElement("p");
                    wizard.innerText = "Is not a wizard";
                    characterDiv.appendChild(wizard);
                }

                const ancestry = document.createElement("p");
                ancestry.innerText = "ancestry: " + element.ancestry;
                characterDiv.appendChild(ancestry);

                const dateOfBirth = document.createElement("p");
                dateOfBirth.innerText = "date of birth: " + element.dateOfBirth;
                characterDiv.appendChild(dateOfBirth);
                

                if (element.image == "") {
                    const image = document.createElement("img");
                    image.src = "bilde/avatar.png";
                    characterDiv.appendChild(image);
                    
                } else {
                    const image = document.createElement("img");
                    image.src = element.image;
                    characterDiv.appendChild(image);       
                }
    
                container.appendChild(characterDiv);
            }
        
        });                
        
    });
    
});
