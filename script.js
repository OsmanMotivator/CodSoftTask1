function sendMessage() {
    let userInput = document.getElementById("user-input").value.toLowerCase();
    let chatBox = document.getElementById("chat-box");
    let botResponse = "";

    if (userInput.includes("hello") || userInput.includes("hi") || userInput.includes("salaam")) || userInput.includes("Asc") {
        botResponse = "Waad salaamantahay! Sideen kuugu caawin karaa maanta?";
    } else if (userInput.includes("sidee tahay") || userInput.includes("iska warran")) || userInput.includes("seetahay") || userInput.includes("sethy") || userInput.includes("seithy") || userInput.includes("setahay") || userInput.includes("sthy") {
        botResponse = "Waan fiicanahay, adigana sidee tahay?";
    } else if (userInput.includes("magacaa")) {
        botResponse = "Magacaygu waa ChatBot! adiga Magacaa?";
    } else if (userInput.includes("magacaygu waa")) {
        botResponse = "Farxad weyn ayay ii tahay inaan ku barto! Sideen kuu caawin karaa maanta?";
    } else if (userInput.includes("saacadda imisa ayey tahay") || userInput.includes("goormay tahay")) || userInput.includes("Meeaqa saac waaaye") {
        let currentTime = new Date().toLocaleTimeString();
        botResponse = "Hadda waa " + currentTime + ".";
    } else if (userInput.includes("cimilada maanta sidee waaye")) {
        botResponse = "Ma jiro xog cimilo aan heli karo, laakiin waxaad ka eegi kartaa app cimilo.";
    } else if (userInput.includes("maxaad qabataa") || userInput.includes("waxa aad sameyso")) {
        botResponse = "Waxaan ahay chatbot, waxaan kaa caawiyaa inaad i weydiiso su'aalo kala duwan.";
    } else if (userInput.includes("nabad galyo") || userInput.includes("macasalaama")) {
        botResponse = "Nabad galyo! Maalin wacan!";
    } else if (userInput.includes("mahadsanid") || userInput.includes("waad ku mahadsantahay")) {
        botResponse = "Aad baad ugu mahadsantahay! Mar kasta diyaar baan kuu ahay.";
    } else if (userInput.includes("xagee ka timid")) {
        botResponse = "Waxaan ka imid dunida barnaamijyada iyo xogta!";
    } else if (userInput.includes("maxaad ka heshaa cuntada")) {
        botResponse = "Anigu ma cuno, laakiin haddii aan cuni lahaa, waxaan jeclaan lahaa baasto!";
    } else {
        botResponse = "Waan ka xumahay, su'aashaada ma fahmin. Fadlan iweydii su'aal kale.";
    }

    chatBox.innerHTML += "<p><strong>Adiga:</strong> " + userInput + "</p>";
    chatBox.innerHTML += "<p><strong>Bot:</strong> " + botResponse + "</p>";
    document.getElementById("user-input").value = ""; // Wax ka saar input-ka kadib marka aad dirto

    // Scroll to the bottom of the chat box
    chatBox.scrollTop = chatBox.scrollHeight;
}
