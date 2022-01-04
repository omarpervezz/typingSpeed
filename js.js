const paragraph = [
    `There were two friends. They lived in a certain village. They promised that they woudl help each other at the time of danger. One day they were passign through a deep forest. Suddenly a bear came in front of them. So both of them were afraid and were at a loss what to do. One of them knew how to climb a tree. He at once climed a tree and hid himself. To other man. finding no alternative, felt on the ground and held his breath pretending to be dead. The bear cme to him and smelt his nose, ears and face, took him to be a dead man and left the place. When the bear was gone, the man in the man in the tree came down and said, Thank God that you are saved. But friend I saw the bear put its mouth very close to your ear. Did it say anything to you. The friend replied, "Yes, the bear told me not to trust a friend who left me in danger to seek his won safety.`,
    `There was a shepherd boy. He kept a flock of sheep near a forest. It was not far from his village. One day he wanted to make a fun with the villagers. So, he began to shout and cried, "Wolf Wofl please help me. "Pleople would come running to help him. Then the cowboy would begin to laugh and say that he only made fun with them. Being disgusted the people would go back. At last annoyed men went away saying, "If the rascal cries out again, we won't go for his help. One day a tiger really came and the boy cried out, "The wolf. The Wolf Please help me! The people heard him shouting but they did not come. They thought that the boy was again playing`,
    `Recho is a 23-year-old girl, the 3rd and last in the family of Elder Johnson, her parents also loved her so much because of her condition, so they were ready to show her love of all kinds so that she would not feel isolated, they were very worried about being treated for the disease, they were advised to take her out for treatment but due to old Johnson  his life was normal he could not send him abroad but she grew up using only common drugs here in Tanzania. One day old Johnson decided to go out with his family so they prepared well then when he returned to work he picked them up and went to get dinner, There were recho, his mother, and his aunt who is his father's brother, ...`,
    `They arrived at a very nice hotel, old Johnson parked the car on the side and then they all got out of the car and went to sit at a table that was not occupied by people then the waiter came and was given an order for the food they ordered after a while they were brought in and started eating.  
    Mr johson said""Let me tell you something that you just don't know. There is no daughter of mine who is as beautiful as recho. But brother you have seen that  but god has given her this disability I do not know who will love him, I feel bad to recho, I feel he will not be loved due to his disability ""
    "" Aah sister what are you talking about now aah ""
    "" Recho's mother felt bad about the words that are spoken with her sister in-law but she just kept quiet and she didn't eat anymore, recho also found out that her aunt is isolating her due to her disability so she had to eat food to act like she did not hear anything, her mother took her out and sent her to the toilet.  As soon as they arrived, recho told his mother.
    "" Mother, why is my aunt doing this to me? Mother, I am really not going to be loved for my disability. My mother is very hurt.
    "My son don't talk so, god has a purpose for you to have this situation, I'm not tired of living with you my son I love you so much and even a man you will get who can marry you`,
    `Thank you mom I understand you and thank you for comforting my mom ""
    ""Let me give you chance for  clean yourself  and to return "
    "" Okay mom  ""
    recho's mother came out and waited for recho outside.
    Recho finished cleaning and thought about the aunt's words and said to herself "No I can't go back I know my mother will suffer and hurt for me, I am a burden to everyone just let me ran away even if I die there will be no problem" recho said, recho walked until she disappeared from the hotel grounds.`,
    `Her mother saw the time go by and then recho did not come out and went back to the toilet but did not see recho, she was very confused and went back to her sister inlaw and her husband and then told them what happened, when old Johnson heard it,he shocked and confused, the started searching by calling recho's name but the areas became very quiet, old Johnson grabbed his head and followed his wife and started questioning her by shaking her violently and asked her, where is my daughter ,I need my daughter  you idiot "My husband, why are you oppressing me, i also don't know where did she went"
    Elder Johnson got in the car and left on his own, leaving his sister and his wife standing there with out talking anything`,
    `Recho walked a lot while being mistaken for cars on the road as she was struggling to cross the road although she did not know where she was going. SHe managed to cross the road very tired, suddenly hooligans saw her  walked alone,  one of them said ..
    "" See that beautiful baby  is walking tonight with rain like this, she is going to be our soup, wait for me to start showing her who I am. "
    The hooligans began to follow recho unknowingly until they reached him and then they wanted to carry recho, and she was not behind she was beating them and biting them with his teeth, suddenly a Noah-type car pulled up a little and then two young men came down and followed the hooligans and started beating them.  very strong ....
    Do you think those who helped him recho are good people or are the same people because everyone is chasing out of his power? ...
    Do not miss part 2.`
  ];
  
  const typingText = document.querySelector(".type_your_text"),
      inpField = document.querySelector(".input-areaa .input_field"),
      tryAgainBtn = document.querySelector(".try_again button"),
      timeTag = document.querySelector(".time-left span b"),
      mistakeTag = document.querySelector(".mistake span b"),
      wpmTag = document.querySelector(".wpm span b"),
      cpmTag = document.querySelector(".cpm span b");
  let timer, maxTime = 60,
      timeLeft = maxTime,
      charIndex = mistakes = isTyping = 0;
  
  function loadParagraph() {
      const ranIndex = Math.floor(Math.random() * paragraph.length);
      typingText.innerHTML = "";
      paragraph[ranIndex].split("").forEach(char => {
          let span = `<span>${char}</span>`
          typingText.innerHTML += span;
      });
      typingText.querySelectorAll("span")[0].classList.add("active");
      document.addEventListener("keydown", () => inpField.focus());
      typingText.addEventListener("click", () => inpField.focus());
  }
  
  function initTyping() {
      let characters = typingText.querySelectorAll("span");
      let typedChar = inpField.value.split("")[charIndex];
      if (charIndex < characters.length - 1 && timeLeft > 0) {
          if (!isTyping) {
              timer = setInterval(initTimer, 1000);
              isTyping = true;
          }
          if (typedChar == null) {
              if (charIndex > 0) {
                  charIndex--;
                  if (characters[charIndex].classList.contains("incorrect")) { mistakes--; }
                  characters[charIndex].classList.remove("correct", "incorrect");
              }
          } else {
              if (characters[charIndex].innerText == typedChar) { characters[charIndex].classList.add("correct"); } else {
                  mistakes++;
                  characters[charIndex].classList.add("incorrect");
              }
              charIndex++;
          }
          characters.forEach(span => span.classList.remove("active"));
          characters[charIndex].classList.add("active");
          let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 60);
          wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;
          wpmTag.innerText = wpm;
          mistakeTag.innerText = mistakes;
          cpmTag.innerText = charIndex - mistakes;
      } else {
          clearInterval(timer);
          inpField.value = "";
      }
  }
  
  function initTimer() {
      if (timeLeft > 0) {
          timeLeft--;
          timeTag.innerText = timeLeft;
          let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 60);
          wpmTag.innerText = wpm;
      } else {
        alert( wpmTag.innerText = wpm)
         clearInterval(timer); 
        }
  }
  
  function resetGame() {
      loadParagraph();
      clearInterval(timer);
      timeLeft = maxTime;
      charIndex = mistakes = isTyping = 0;
      inpField.value = "";
      timeTag.innerText = timeLeft;
      wpmTag.innerText = 0;
      mistakeTag.innerText = 0;
      cpmTag.innerText = 0;
  }
  loadParagraph();
  inpField.addEventListener("input", initTyping);
  tryAgainBtn.addEventListener("click", resetGame);
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  