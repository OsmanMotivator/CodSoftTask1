function sendMessage() {
    let userInput = document.getElementById("user-input").value.toLowerCase();
    let chatBox = document.getElementById("chat-box");
    let botResponse = "";

    if (userInput.includes("hello") || userInput.includes("asc") || userInput.includes("salaam")) {
        botResponse = "Waad salaamantahay! Sideen kuu caawin karaa maanta?";
    } else if (userInput.includes("sidee tahay") || userInput.includes("setahay") || userInput.includes("seetahay") || userInput.includes("sethy") || userInput.includes("sthy") ) {
        botResponse = "Waan fiicanahay, adigana sidee tahay?";
    } else if (userInput.includes ("wan fiicanahay") || userInput.includes("fcn")) {
        botResponse = "Soo dhawaaw! Sideen kuu caawin karaa maanta?";
    } else if (userInput.includes("magacaa") || userInput.includes("magaca")) {
        botResponse = "Magacaygu waa ChatBot! Adigana Magacaa?";
    } else if (userInput.includes("?")) {
        botResponse = "Farxad weyn ayay ii tahay inaan ku barto! Sideen kuu caawin karaa maanta?";
    } else if (userInput.includes("saacadda imisa ayey tahay") || userInput.includes("meeqa saac waaye")) {
        let currentTime = new Date().toLocaleTimeString();
        botResponse = "Hadda saacadu waa " + currentTime + ".";
    } else if (userInput.includes("cimilada maanta kawaran")) {
        botResponse = "Ma jiro xog cimilo aan heli karo, laakiin waxaad ka eegi kartaa app cimilo.";
    } else if (userInput.includes("maxaad qabataa") || userInput.includes("waxa aad sameyso") || userInput.includes("maxaa qabataa")) {
        botResponse = "Waxaan ahay chatbot, waxaan ka caawiyaa inaad iweydiiso su'aalo kala duwan.";
    } else if (userInput.includes("nabad galyo") || userInput.includes("macasalaama")) {
        botResponse = "Nabad galyo! Maalin wacan!";
    } else if (userInput.includes("mahadsanid") || userInput.includes("waad ku mahadsantahay")) {
        botResponse = "Soo dhawaaw saaxiib! Mar kasta diyaar baan kuu ahay.";
    } else if (userInput.includes("xagee ka timid")) {
        botResponse = "Waxaan ka imid dunida barnaamijyada iyo xogta!";
    } else if (userInput.includes("maxaad ka heshaa cuntada")) {
        botResponse = "Anigu waxma cuno, laakiin haddii aan cuni lahaa, waxaan jeclaan lahaa baasto!";
    } else {
        botResponse = "Waan ka xumahay saaxiib, su'aashaada ma fahmin. Fadlan iweydii su'aal kale.";
    }

    chatBox.innerHTML += "<p><strong>ADIGA:</strong> " + userInput + "</p>";
    chatBox.innerHTML += "<p><strong>CARFI:</strong> " + botResponse + "</p>";
    document.getElementById("user-input").value = ""; // Wax ka saar input-ka kadib marka aad dirto

    // Scroll to the bottom of the chat box
    chatBox.scrollTop = chatBox.scrollHeight;
}
