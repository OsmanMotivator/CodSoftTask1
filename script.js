document.getElementById("sendButton").addEventListener("click", function() {
    let userInput = document.getElementById("userInput").value.toLowerCase();
    let botResponse = "";

    if (userInput.includes("hello") || userInput.includes("hi") || userInput.includes("salaam")) {
        botResponse = "Waad salaamantahay! Sideen kuugu caawin karaa maanta?";
    } else if (userInput.includes("sidee tahay") || userInput.includes("iska warran")) {
        botResponse = "Waan fiicanahay, adigana sidee tahay?";
    } else if (userInput.includes("magacaa")) {
        botResponse = "Magacaygu waa ChatBot! Magacaa?";
    } else if (userInput.includes("magacaygu waa")) {
        botResponse = "Farxad weyn ayay ii tahay inaan ku barto! Sideen kuugu caawin karaa maanta?";
    } else if (userInput.includes("saacadda imisa ayey tahay") || userInput.includes("goormay tahay")) {
        let currentTime = new Date().toLocaleTimeString();
        botResponse = "Hadda waa " + currentTime + ".";
    } else if (userInput.includes("cimilo")) {
        botResponse = "Ma jiro xog cimilo aan heli karo, laakiin waxaad ka eegi kartaa app cimilo.";
    } else if (userInput.includes("maxaad qabataa") || userInput.includes("waxa aad sameyso")) {
        botResponse = "Waxaan ahay chatbot, waxaan ku caawinaa inaad weydiiso su'aalo kala duwan.";
    } else if (userInput.includes("nabad galyo") || userInput.includes("macasalaama")) {
        botResponse = "Nabad galyo! Maalin wacan!";
    } else if (userInput.includes("mahadsanid") || userInput.includes("waad ku mahadsantahay")) {
        botResponse = "Aad baad ugu mahadsantahay! Mar kasta waan kuu diyaar ahay.";
    } else if (userInput.includes("xagee ka timid")) {
        botResponse = "Waxaan ka imid dunida barnaamijyada iyo xogta!";
    } else if (userInput.includes("maxaad ka heshaa cuntada")) {
        botResponse = "Anigu ma cuno, laakiin haddii aan cuni lahaa, waxaan jecelahay inaan jeclaan lahaa baasto!";
    } else {
        botResponse = "Waan ka xumahay, su'aashaada ma fahmin. Fadlan weydii su'aal kale.";
    }

    document.getElementById("chatOutput").innerHTML += "<p><strong>Adiga:</strong> " + userInput + "</p>";
    document.getElementById("chatOutput").innerHTML += "<p><strong>Bot:</strong> " + botResponse + "</p>";
    document.getElementById("userInput").value = ""; // Wax ka saar input-ka kadib marka aad dirto
});
