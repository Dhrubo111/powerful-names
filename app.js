let happyBtn = document.querySelector(".happy")

let sadBtn = document.querySelector(".sad")

let afraidBtn = document.querySelector(".afraid")

let angerBtn = document.querySelector(".anger")


let nameBtn = document.querySelector(".names")


let nameBord = document.querySelector(".all-names")

let clickCounter = 0
function stopAudio(){

    let audio = document.querySelectorAll("audio")

    audio.forEach(
        e =>{
            e.pause()
        }
    )

}



happyBtn.addEventListener(
    "click" , ()=>{
        stopAudio()
        const audio = document.querySelector('audio[data-key="3"]')

        audio.currentTime = 0 

        audio.play()
    }
)

sadBtn.addEventListener(
    "click" , ()=>{
        stopAudio()
        const audio = document.querySelector('audio[data-key="2"]')

        audio.currentTime = 0 

        audio.play()

    }
)


afraidBtn.addEventListener(
    "click" , ()=>{
        stopAudio()
        const audio = document.querySelector('audio[data-key="1"]')

        audio.currentTime = 0 

        audio.play()

    }
)


angerBtn.addEventListener(
    "click" , ()=>{
        stopAudio()
        const audio = document.querySelector('audio[data-key="4"]')

        audio.currentTime = 0 

        audio.play()

    }
)





let namesArray = [
    { name: 'AR-RAHMAAN', meaning: 'The Beneficent' },
    { name: 'AR-RAHEEM', meaning: 'The Merciful' },
    { name: 'AL-MALIK', meaning: 'The King' },
    { name: 'AL-QUDDUS', meaning: 'The Most Sacred' },
    { name: 'AS-SALAM', meaning: 'The Source of Peace, The Flawless' },
    { name: 'AL-MU’MIN', meaning: 'The Infuser of Faith' },
    { name: 'AL-MUHAYMIN', meaning: 'The Preserver of Safety' },
    { name: 'AL-AZIZ', meaning: 'All Mighty' },
    { name: 'AL-MUTAKABBIR', meaning: 'The Supreme, The Majestic' },
    { name: 'AL-KHAALIQ', meaning: 'The Creator, The Maker' },
    { name: 'AL-BAARI', meaning: 'The Evolver' },
    { name: 'AL-MUSAWWIR', meaning: 'The Fashioner' },
    { name: 'AL-GHAFFAR', meaning: 'The Constant Forgiver' },
    { name: 'AL-QAHHAR', meaning: 'The All-Prevailing One' },
    { name: 'AL-WAHHAAB', meaning: 'The Supreme Bestower' },
    { name: 'AR-RAZZAAQ', meaning: 'The Provider' },
    { name: 'AL-FATTAAH', meaning: 'The Supreme Solver' },
    { name: 'AL-‘ALEEM', meaning: 'The All-Knowing' },
    { name: 'AL-QAABID', meaning: 'The Withholder' },
    { name: 'AL-BAASIT', meaning: 'The Extender' },
    { name: 'AL-KHAAFIDH', meaning: 'The Reducer' },
    { name: 'AR-RAAFI’', meaning: 'The Exalter, The Elevator' },
    { name: 'AL-MU’IZZ', meaning: 'The Honourer, The Bestower' },
    { name: 'AL-MUZIL', meaning: 'The Dishonourer' },
    { name: 'AS-SAMEE’', meaning: 'The All-Hearing' },
    { name: 'AL-BASEER', meaning: 'The All-Seeing' },
    { name: 'AL-HAKAM', meaning: 'The Impartial Judge' },
    { name: 'AL-‘ADL', meaning: 'The Utterly Just' },
    { name: 'AL-LATEEF', meaning: 'The Subtle One, The Most Gentle' },
    { name: 'AL-KHABEER', meaning: 'The All-Aware' },
    { name: 'AL-HALEEM', meaning: 'The Most Forbearing' },
    { name: 'AL-‘AZEEM', meaning: 'The Magnificent, The Supreme' },
    { name: 'AL-GHAFOOR', meaning: 'The Great Forgiver' },
    { name: 'ASH-SHAKOOR', meaning: 'The Most Appreciative' },
    { name: 'AL-‘ALEE', meaning: 'The Most High, The Exalted' },
    { name: 'AL-KABEER', meaning: 'The Most Great' },
    { name: 'AL-HAFEEDH', meaning: 'The Preserver' },
    { name: 'AL-MUQEET', meaning: 'The Sustainer' },
    { name: 'AL-HASEEB', meaning: 'The Reckoner' },
    { name: 'AL-JALEEL', meaning: 'The Majestic' },
    { name: 'AL-KAREEM', meaning: 'The Most Generous, The Most Esteemed' },
    { name: 'AR-RAQEEB', meaning: 'The Watchful' },
    { name: 'AL-MUJEEB', meaning: 'The Responsive One' },
    { name: 'AL-WAASI’', meaning: 'The All-Encompassing, the Boundless' },
    { name: 'AL-HAKEEM', meaning: 'The All-Wise' },
    { name: 'ASH-SHAHEED', meaning: 'The All Observing Witnessing' },
    { name: 'AL-HAQQ', meaning: 'The Absolute Truth' },
    { name: 'AL-WAKEEL', meaning: 'The Trustee, The Disposer of Affairs' },
    { name: 'AL-QAWIYY', meaning: 'The All-Strong' },
    { name: 'AL-MATEEN', meaning: 'The Firm, The Steadfast' },
    { name: 'AL-WALIYY', meaning: 'The Protecting Associate' },
    { name: 'AL-HAMEED', meaning: 'The Praiseworthy' },
    { name: 'AL-MUHSEE', meaning: 'The All-Enumerating, The Counter' },
    { name: 'AL-MUBDI', meaning: 'The Originator, The Initiator' },
    { name: 'AL-MUEED', meaning: 'The Restorer, The Reinstater' },
    { name: 'AL-MUHYI', meaning: 'The Giver of Life' },
    { name: 'AL-MUMEET', meaning: 'The Creator of Death' },
    { name: 'AL-HAYY', meaning: 'The Ever-Living' },
    { name: 'AL-QAYYOOM', meaning: 'The Sustainer, The Self-Subsisting' },
    { name: 'AL-WAAJID', meaning: 'The Perceiver' },
    { name: 'AL-MAAJID', meaning: 'The Illustrious, the Magnificent' },
    { name: 'AL-WAAHID', meaning: 'The One' },
    { name: 'AL-AHAD', meaning: 'The Unique, The Only One' },
    { name: 'AS-SAMAD', meaning: 'The Eternal, Satisfier of Needs' },
    { name: 'AL-QADEER', meaning: 'The Omnipotent One' },
    { name: 'AL-MUQTADIR', meaning: 'The Powerful' },
    { name: 'AL-MUQADDIM', meaning: 'The Expediter, The Promoter' },
    { name: 'AL-MU’AKHKHIR', meaning: 'The Delayer' },
    { name: 'AL-AWWAL', meaning: 'The First' },
    { name: 'AL-AAKHIR', meaning: 'The Last' },
    { name: 'AZ-ZAAHIR', meaning: 'The Manifest' },
    { name: 'AL-BAATIN', meaning: 'The Hidden One, Knower of the Hidden' },
    { name: 'AL-WAALI', meaning: 'The Sole Governor' }]




    nameBtn.addEventListener(
        "click" , ()=>{
            stopAudio()
            if(clickCounter%2==0){
                namesArray.forEach(
                    e=>{
                        let name = document.createElement("h3")
                        name.textContent = `[${e.name}] meaning:${e.meaning}`
                        nameBord.appendChild(name)
                    }
                )
            }else{

                nameBord.innerHTML = ""
            }

            clickCounter ++;
           
    
        }
    )    
    
 