//Dit is de functie voor de klok, met hr als uren, min als minuten en sec als seconden. Ik heb AM en PM in mijn klok staan als extra indicator van de dagfase. Ik heb die ook graag op mijn telefoon :)
//Ik krijg de actuele tijd door het Date object in te zetten (new Date). Dan kan je invoeren wat je precies wil hebben van je klok. getHours voor je uren, getMinutes voor je minuten, etc.
// Ik wou uren minuten en seconden zodat je makkelijk kan zien dat de klok echt doortikt in real time

function renderTime() {
    var currentTime = new Date();
    var timeIndication = "AM";
    var hr = currentTime.getHours();
    var min = currentTime.getMinutes();
    var sec = currentTime.getSeconds(); 
    
    // if statements voor de nummerverwisseling van AM en PM. Eerst gaat hij over naar PM als het uur hoger dan 12 is

    if (hr == 0) {
        hr = 12;
    } else if (hr > 12) {
        hr = hr - 12;
        timeIndication = "PM";
    }

    // deze voegen een extra nul toe aan een enkel cijfer in hr min en sec voor netheid van de klok. Als het nummer 1 cijfer bevat (aka alles minder dan 10) komt er een 0 voor te staan.

    if (hr < 10) {
        hr = "0" + hr;
    }

    if (min < 10) {
        min = "0" + min;
    }

    if (sec < 10) {
        sec = "0" + sec;
    }

    // Hier laat ik zien hoe ik de klok wil zien. Namelijk hr : min : sec AM/PM. 

    var martianClock = document.getElementById('time');
    martianClock.textContent = hr + ":" + min + ":" + sec + " " + timeIndication;
    setTimeout('renderTime()',1000);
}

// En hier voer ik de functie uit zodat de klok ook gaat lopen. setTimeout zorgt dat iedere 1000 miliseconde de functie wordt uitgevoerd.

renderTime();


// Daarna gaan we naar de datum aanduiding. De namen van de weekdagen en maanden heb ik in een array gezet, 
// zodat het wat makkelijker te lezen was en niet "fout" (Toen ik de datum zonder namen had gemaakt, klopte de maand niet. 
// Die was namelijk 2 ipv 3. Dit kwam omdat januari 0 is en februari pas 1. Dit heb ik op kunnen lossen met die array)

var dayName = new Array ("Sunday", "Monday", "Tuesday", "Wednesday", 
"Thursday", "Friday", "Saturday");

var monthName = new Array ("January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December");

    //dan volgt de functie voor de datum, deze heb ik op een vergelijkbare manier gedaan als bij de klok. 
    // Het enige verschil is dat ik sommige variabelen in de textContent moest schrijven, anders werkte hij bij mij niet.

function renderDate() {
    var currentDate = new Date ();
    var day = currentDate.getDate();
    var year = currentDate.getFullYear();

    var martianCalendar = document.getElementById('date');
    martianCalendar.textContent = dayName[currentDate.getDay()]+ ", " + day + " " + monthName[currentDate.getMonth()] + " " + year;
    setTimeout('renderTime()', 1000);
}
renderDate();

// Het klok en datum gedeelte ging mij redelijk goed af voor mijn doen. Ik heb de css niet 4x opnieuw hoeven doen, dit keer slechts 1 keer. 
// Ik had verwacht dat de klok het moeilijkste gedeelte was. Dat bleek niet zo te zijn in mijn geval. 
// Ik heb uren gezocht naar een manier hoe ik van achtergrond kon veranderen in real time, maar ik kon niets vinden en raakte helemaal in paniek.
// Uw tweede oplossing bleek nog best simpel te zijn, ik snap hoe het werkt en dat is het belangrijske denk ik.
// Ik had de eerste oplossing geprobeerd, maar ik kwam niet verder dan het berekenen van uren naar %. 
// Ik wist niet zo goed hoe ik dat kon omtoveren naar bijv. een functie voor het veranderen van een achtergrond per uur.
// mijn cycle functie pakt het ID 'sky' van mijn html element "body". Die heeft ook de class "dawn", de eerste dagfase.
// In css heb ik 4 dagfasen classes gemaakt met elk hun eigen achtergrondje. Ik wou eerst alleen een kleur als achtergrond, maar dat vond ik te plain.
// Deze code zorgt ervoor dat die class wordt omgewisseld op basis van de dagfase. In uw voorbeeld had u 2 requirements, 
// maar ik vond dat ik er maar 1 nodig had voor mijn functie.

function cycle() {
    var currentTime = new Date();

    if (currentTime.getHours() < 12) {
        document.getElementById('sky').classList.add('dawn');
		document.getElementById('sky').classList.remove('night');
    } else if (currentTime.getHours() < 17) {
        document.getElementById('sky').classList.add('day');
		document.getElementById('sky').classList.remove('dawn');
    } else if (currentTime.getHours() < 23) {
        document.getElementById('sky').classList.add('dusk');
		document.getElementById('sky').classList.remove('day'); 
    } else if (currentTime.getHours() < 7) {
        document.getElementById('sky').classList.add('night');
		document.getElementById('sky').classList.remove('dusk'); 
    }
};
cycle();
setInterval(cycle, 1000);
        
