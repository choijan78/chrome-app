const quotes = [
  {
    en: "1. Compliment three people every day.",
    kr: "매일 세 사람에게 칭찬하세요.",
  },
  {
    en: "3. Watch a sunrise at least once a year.",
    kr: "적어도 일년에 한 번을 일출을 보세요.",
  },
  {
    en: "4. Remember other people's birthdays.",
    kr: "다른 사람들의 생일을 기억하세요.",
  },
  {
    en: "5. Overtip breakfast waitresses.",
    kr: "아침을 가져다주는 웨이트리스에게는 팁을 더 주세요.",
  },
  { en: "6. Have a firm handshake.", kr: "악수를 할 땐 손을 꼭 쥐어요." },
  { en: "7. Look people in the eye.", kr: "사람들의 눈을 들여다보세요." },
  { en: `8. Say "thank you" a lot.`, kr: `"감사합니다"라고 많이 말하세요.` },
  { en: `9. Say "please" a lot.`, kr: `"제발 부탁입니다 "라고 많이 말하세요.` },
  {
    en: "10. Learn to play a musical instrument.",
    kr: "악기를 연주하는 방법을 배우세요.",
  },
  { en: "11. Sing in the shower.", kr: "샤워하며 노래를 부르세요." },
  { en: "12. Use the good silver.", kr: "좋은 은 식기를 쓰세요." },
  {
    en: "13. Learn to make great chili.",
    kr: `'굉장한' 칠리를 만드는 법을 배우세요.`,
  },
  { en: "14. Plant flowers every spring.", kr: "봄엔 꽃을 가꾸세요." },
  {
    en: "15. Own a great stereo system.",
    kr: `'그럴싸한' 스테레오 시스템을 소유하세요.`,
  },
  {
    en: `16. Be the first to say, "Hello."`,
    kr: `남보다 먼저 "안녕하세요."하고 인사하세요.`,
  },
  { en: "17. Live beneath your means.", kr: "수입 이내의 생활을 하세요." },
  {
    en: "18. Drive inexpensive cars, but own the best house you can afford.",
    kr: "값싼 차를 몰되 , 여유가 되는 한 가장 좋은 집을 소유하세요.",
  },
  {
    en: "19. Buy great books even if you never read them.",
    kr: "전혀 읽지 않더라도 좋은 책들을 사두세요.",
  },
  {
    en: "20. Be forgiving of yourself and others.",
    kr: "자신과 남들을 용서하세요.",
  },
  {
    en: "21. Learn three clean jokes.",
    kr: "세 가지 음탕하지 않은 농담을 배워두세요.",
  },
  { en: "22. Wear polished shoes.", kr: "구두를 닦아 신으세요." },
  { en: "23. Floss your teeth.", kr: "이빨 사이에 낀 것을 제거하세요." },
  {
    en: "24. Drink champagne for no reason at all.",
    kr: "아무 까닭 없이도 샴페인을 마셔보세요.",
  },
  {
    en: "25. Ask for a raise when you feel you've earned it.",
    kr: "받을만하다고 느낄 때 승진을 요구하세요.",
  },
  {
    en: "26. If in a fight, hit first and hit hard.",
    kr: "싸울 땐 먼저 때리고 세게 치세요.",
  },
  { en: "27. Return all things you borrow.", kr: "빌린 것은 모두 돌려주세요." },
  {
    en: "28. Teach some kind of class.",
    kr: "어떤 부류의 사람들을 가르쳐보세요.",
  },
  {
    en: "29. Be a student in some kind of class.",
    kr: "어떤 부류의 사람들 속에서 학생이 되어보세요.",
  },
  {
    en: "30. Never buy a house without a fireplace.",
    kr: "벽난로 없는 집은 사지 마세요.",
  },
  {
    en: "31. Buy whatever kids are selling on card tables in their front yards.",
    kr: " 아이들이 앞마당에서 카드놀이 탁자 위에 놓고 파는 것은 무엇이든지 구입하세요.",
  },
  {
    en: "32. Once in your life own a convertible.",
    kr: "일생에 한 번은 컨버터블 자동차를 소유하세요.",
  },
  {
    en: "33. Treat everyone you meet like you want to be treated.",
    kr: "만나는 사람에게 당신이 대우받고 싶은 만큼 대접하세요.",
  },
  {
    en: "34. Learn to identify the music of Chopin, Mozart, and Beethoven.",
    kr: "쇼팽 , 모짜르트 그리고 베토벤의 음악을 구별하는 법을 배우세요.",
  },
  {
    en: "35. Plant a tree on your birthday.",
    kr: "생일엔 나무 한 그루를 심으세요.",
  },
  {
    en: "36. Donate two pints of blood every year.",
    kr: "일년에 1리터 정도 헌혈하세요.",
  },
  {
    en: "37. Make new friends but cherish the old ones.",
    kr: "새로운 친구를 사귀되 오랜 친구를 소중히 하세요.",
  },
  { en: "38. Keep secrets.", kr: "비밀을 가지세요." },
  { en: "39. Take lots of snapshots.", kr: "사진을 많이 찍으세요." },
  {
    en: "40. Never refuse homemade brownies.",
    kr: "집에서 만든 초컬릿 케익을 절대 사양하지 마세요.",
  },
  { en: "41. Don't postpone joy.", kr: "즐거운 일을 미루지 마세요." },
  {
    en: `42. Write "thank you" notes promptly.`,
    kr: `제때에 "고맙다"는 쪽지를 남기세요.`,
  },
  {
    en: "43. Never give up on anybody. Miracles happen every day.",
    kr: "어떤 사람이라도 포기하지 마세요. 기적은 매일 일어난답니다.",
  },
  { en: "44. Show respect for teachers.", kr: "교사들에게 존경심을 보이세요." },
  {
    en: "45. Show respect for police officers and fire fighters.",
    kr: "경관들과 소방관들에게 존경심을 보이세요.",
  },
  {
    en: "46. Show respect for military personnel.",
    kr: "병사에게 존경심을 보이세요.",
  },
  {
    en: `47. Don't waste time learning the tricks of the trade. Instead, learn the trade.`,
    kr: "장사의 요령을 배우는데 시간을 낭비하지 마세요. 대신에 장사를 배우세요.",
  },
  {
    en: "48. Keep a tight rein on your temper.",
    kr: "당신의 성질에 고삐를 죄세요.",
  },
  {
    en: "49. Buy vegetables from truck farmers who advertise with hand-lettered sign.",
    kr: "손글씨 광고판을 붙인 농부의 트럭에서 야채를 사도록 하세요.",
  },
  {
    en: "50. Put the cap back on the toothpaste.",
    kr: "치약 뚜껑을 도로 덮어놓으세요.",
  },
  {
    en: "51. Take out the garbage without being told.",
    kr: "소리듣기 전에 쓰레기를 치우세요.",
  },
  {
    en: "52. Avoid overexposure to the sun.",
    kr: "일광에 과다노출 하지 마세요.",
  },
  { en: "53. Vote.", kr: "투표하세요." },
  {
    en: "54. Surprise loved ones with little unexpected.",
    kr: "작고도 기대치 못한 선물로 사랑하는 사람을 놀라게 하세요.",
  },
  {
    en: "55. Stop blaming others. Take responsibility for every area of your life.",
    kr: "남을 비난하지 마세요. 당신의 삶의 모든 영역에 있어 책임을 져야합니다.",
  },
  {
    en: "56. Never mention being on a diet.",
    kr: "다이어트 중이라는 소리는 하지 마세요.",
  },
  {
    en: "57. Make the best of bad situations.",
    kr: "나쁜 상황에서도 최선을 다하세요.",
  },
  {
    en: "58. Always accept an outstretched hand.",
    kr: "악수하자고 내민 손을 부끄럽게 하지 마세요.",
  },
  {
    en: "59. Live so that when your children think of fairness, caring, and integrity, they think of you.",
    kr: "당신의 아이들이 공평 , 봉사 그리고 성실을 생각할 때까지 사세요. 그러면 그들이 당신을 생각할 겁니다.",
  },
  { en: "60. Admit your mistake.", kr: "당신의 실수를 받아들이세요." },
  {
    en: "61. Ask someone to pick up your mail and daily paper when you're out of town. Those are the first two things potential burglars look for.",
    kr: "도시를 벗어날 때 다른 사람에게 우편물과 신문을 챙겨달라고 하세요. 그것들은 숨어있는 강도들이 찾는 첫 두 가지 것입니다.",
  },
  {
    en: "62. Use Your wit to amuse, not abuse.",
    kr: "즐겁게 하기 위해 당신의 기지를 발휘하세요. 남을 헐뜯기 위해 사용하지 마세요.",
  },
  {
    en: "63. Remember that all news is biased.",
    kr: "모든 소문은 편향적이라는 것을 기억하세요.",
  },
  { en: "64. Take a photography course.", kr: "사진교습을 받아보세요." },
  {
    en: "65. Let people pull in front of you when you're stopped in traffic.",
    kr: "교통체증에 막혀 있을 때는 자동차를 바짝 대게 하세요.",
  },
  { en: "66. Support a high school band.", kr: "고등학교 악단을 지원하세요." },
  {
    en: "67. Demand excellence and be willing to pay for it.",
    kr: "최고의 것을 요구하고 기꺼이 값을 치르세요.",
  },
  {
    en: "68. Be brave. Even if you're not, pretend to be. No one can tell the difference.",
    kr: "용감하세요. 그렇지 않다면 적어도 그런 척 이라도 하세요. 그 차이를 아는 사람은 아무도 없습니다.",
  },
  { en: "69. Whistle.", kr: "휘파람을 부세요." },
  {
    en: "70. Hug children after you discipline them.",
    kr: "나무란 다음에는 아이들을 껴안아 주세요.",
  },
  {
    en: "71. Learn to make something beautiful with your hands.",
    kr: "당신의 손으로 아름다운 어떤 것을 만드는 방법을 배우세요.",
  },
  {
    en: "72. Give to charity all the clothes you haven't worn during the past three years.",
    kr: "지난 3년 동안 입지 않은 모든 옷가지를 자선단체에 기부하세요.",
  },
  {
    en: "73. Never forget your anniversary.",
    kr: "기념일을 절대로 잊지 마세요.",
  },
  { en: "74. Eat prunes.", kr: "말린 자두를 드세요." },
  { en: "75. Ride a bike.", kr: "자전거를 타세요." },
  {
    en: "76. Choose a charity in your community and support it generously with your time and money.",
    kr: "당신의 지역사회에서 자선단체를 하나 선택하여 시간적으로나 금전적으로 아낌없이 지원하라.",
  },
  {
    en: "77. Don't take good health for granted.",
    kr: "건강이 좋다고 장담하지 마세요.",
  },
  {
    en: "78. When someone wants to hire you, even if it's for a job you have little interest in, talk to them. Never close the door on an opportunity until you've had a chance to hear the offer in person.",
    kr: "어떤 사람이 당신을 고용하고자 할 때, 그것이 별 관심 없는 직업이라 할지라도 그들과 이야기하세요. 직접 제안을 들을 기회를 가질 때까지 어떤 기회에 대해서도 문을 닫지 마세요.",
  },
  {
    en: "79. Don't mess with drugs, and don't associate with those who do.",
    kr: "마약에 손을 대지 마세요. 그리고 마약하는 사람들과 어울리지도 마세요.",
  },
  { en: "81. Avoid sarcastic remarks.", kr: "빈정거리는 말은 피하세요." },
  {
    en: "82. Steer clear of restaurants with strolling musicians.",
    kr: "순회악사가 있는 음식점은 피하세요.",
  },
  {
    en: "83. In business and in family relationships, remember that the most important thing is trust.",
    kr: "사업과 가족 관계에 있어서 가장 중요한 것은 신뢰라는 것을 기억하세요.",
  },
  { en: "84. Forget the Joneses.", kr: "세상사람들을 잊으세요." },
  {
    en: "85. Never encourage anyone to become a lawyer.",
    kr: "변호사가 되려는 사람을 격려하지 마세요.",
  },
  { en: "86. Don't smoke.", kr: "금연하세요." },
  {
    en: "87. Even if you're financially well-to-do, have your children earn and pay part of their college tuition.",
    kr: "당신이 재정적으로 부유하다고 해도 아이들에게 그들의 대학 수업료의 일부를 치르게 하세요.",
  },
  {
    en: "88. Even if you're financially well-to-do, have your children earn and pay for all their automobile insurance.",
    kr: "당신이 재정적으로 부유하다고 해도 아이들에게 그들의 자동차 보험료의 전부를 치르게 하세요.",
  },
  {
    en: "89. Recycle old newspapers, bottles, and cans.",
    kr: "오래된 신문과 병 , 그리고 캔을 재활용하세요.",
  },
  { en: "90. Refill ice cube trays.", kr: "각얼음 접시를 다시 채우세요." },
  {
    en: "91. Don't let anyone ever see you tipsy.",
    kr: "당신이 취해 비틀거리는 모습을 아무에게도 보이지 마세요.",
  },
  {
    en: "92. Never invest more in the stock market than you can afford to lose.",
    kr: "당신이 잃어버려도 될 만큼보다 더 많이 주식에 투자하지 마세요.",
  },
  {
    en: "93. Choose your life's mate carefully. From this one decision will come ninety percent of all your happiness or misery.",
    kr: "일생의 반려자는 신중하게 고르세요. 이 결정에서 당신의 행복이나 불행의 90퍼센트가 연유합니다.",
  },
  {
    en: "94. Make it a habit to do nice things for people who'll never find out.",
    kr: "알아채지 못할 사람들을 위해 좋은 일을 하는 것을 습관화하세요.",
  },
  { en: "95. Attend class reunions.", kr: "반창회에 참석하세요." },
  {
    en: "96. Lend only those books you never care to see again.",
    kr: "다시는 보지 않을 책들만을 빌려주세요.",
  },
  {
    en: "97. Always have something beautiful in sight, even if it's just a daisy in a jelly glass.",
    kr: "그것이 투명한 유리컵에 데이지 꽃에 지나지 않을지라도, 항상 가까운 곳에 아름다운 무언가를 놔두세요.",
  },
  { en: "98. Know how to type.", kr: "타자치는 법을 알아두세요." },
  {
    en: "99. Think big thoughts, but relish small pleasures.",
    kr: "큰 생각을 하되 자그마한 즐거움을 즐기세요.",
  },
  {
    en: "101. Learn how to read a financial report.",
    kr: "재정보고서를 읽는 방법을 배워두세요.",
  },
  {
    en: "102. Tell your kids often how terrific they are and that you trust them.",
    kr: "아이들에게 그들이 얼마나 훌륭한지, 그리고 당신이 신뢰한다는 것을 자주 말하세요.",
  },
  {
    en: "103. Use credit cards only for convenience, never for credit.",
    kr: "외상 거래 때문이 아니라 편리함 때문에 신용카드를 쓰세요.",
  },
  {
    en: "104. Take a brisk thirty-minute walk everyday.",
    kr: "날마다 기분 좋게 30분 정도 걸으세요.",
  },
  {
    en: "105. Treat yourself to massage on your birthday.",
    kr: "생일날엔 마사지를 받으세요.",
  },
  { en: "106. Never cheat.", kr: "속이지 마세요." },
  {
    en: "107. Smile a lot. It costs nothing and is beyond price.",
    kr: "많이 미소지으세요. 돈이 드는 것은 아니지만 값어치를 따질 수 없습니다.",
  },
  {
    en: "108. When dining with clients or business associates, never order more than one cocktail or one glass of wine. If no one else is drinking, don't drink at all.",
    kr: "고객이나 사업 제휴자와 식사할 때는 한잔의 칵테일이나 와인 한잔이상 주문하지 마세요. 아무도 술을 마시지 않는다면 아예 마시지 마세요.",
  },
  {
    en: "109. Know how to drive a stick shift.",
    kr: "변속 레버를 조작하는 법을 알아두세요.",
  },
  {
    en: "110. Spread crunchy peanut butter on Pepperidge Farm Gingerman cookies for the perfect late-night snack.",
    kr: "완벽한 야식을 위해 페퍼리지 농장 진저먼 쿠키에다 우두둑 씹히는 땅콩 버터를 바르세요.",
  },
  { en: "111. Never use profanity.", kr: "신성 모독하는 말을 하지 마세요." },
  {
    en: `112. Never argue with police officers, and address them as "officer."`,
    kr: `경관과 논쟁하지 마세요. 그리고 "경관님"이라고 부르세요.`,
  },
  {
    en: "113. Learn to identify local wild flowers, birds, and trees.",
    kr: "지방 특유의 들꽃과 새 , 그리고 나무들을 구별하는 법을 배우세요.",
  },
  {
    en: "114. Keep fire extinguishers in your kitchen and car.",
    kr: "주방과 자동차 속에 소화기를 비치하세요.",
  },
  {
    en: "115. Give yourself a year and read the Bible cover to cover.",
    kr: "일년을 작정하고 성경을 처음부터 끝까지 읽으세요.",
  },
  {
    en: "116. Consider writing a living will.",
    kr: "사망 선택 유언을 쓸 것을 고려해 보세요.",
  },
  {
    en: "117. Install dead bolt locks on outside doors.",
    kr: "바깥문에 빗장 자물쇠를 설치하세요.",
  },
  {
    en: "118. Don't buy expensive wine, luggage, or watches.",
    kr: "비싼 와인 , 행낭 혹은 시계는 사지 마세요.",
  },
  {
    en: "119. Put a lot of little marshmallows in your hot chocolate.",
    kr: "뜨거운 초컬릿에 조그만 마쉬맬로를 많이 넣으세요.",
  },
  { en: "120. Learn CPR.", kr: "심폐 소생술을 배워두세요." },
  {
    en: "121. Resist the temptation to buy a boat.",
    kr: "보트를 사고픈 유혹에 저항하세요.",
  },
  {
    en: "122. Stop and read historical roadside markers.",
    kr: "길을 가다가도 멈춰서 역사적인 노변 표지를 읽으세요.",
  },
  {
    en: "123. Learn to listen. Opportunity sometimes knocks very softly.",
    kr: "듣는 방법을 배우세요. 기회는 매우 부드럽게 찾아옵니다.",
  },
  {
    en: "124. Know how to change a tire.",
    kr: "바퀴 교환하는 법을 알아두세요.",
  },
  {
    en: "125. Know how to tie a bow tie.",
    kr: "나비넥타이 매는 법을 알아두세요.",
  },
  {
    en: "126. Respect your children's privacy. Knock before entering their rooms.",
    kr: "아이들의 프라이버시를 존중해주세요. 그들 방에 들어가기 전에 노크하세요.",
  },
  {
    en: "127. Wear audacious underwear under the most solemn business attire.",
    kr: "가장 '엄숙한' 비즈니스 정장 속엔 대담한 속옷을 입으세요.",
  },
  { en: "128. Remember people's names.", kr: "사람들의 이름을 기억하세요." },
  {
    en: "129. Introduce yourself to the manager where you bank. It's important that he/she know you personally.",
    kr: "거래하는 은행의 지점장에게 당신을 소개하세요. 그 /그녀가 당신을 개인적으로 안다는 것은 중요합니다.",
  },
  {
    en: "130. Leave the toilet seat in the down position.",
    kr: "변기 대좌는 아래쪽에 내려 두세요.",
  },
  {
    en: "131. Learn the capitals of the states.",
    kr: "각 주의 주도를 알아두세요.",
  },
  {
    en: "132. Visit Washington, D.C., and do the tourist bit.",
    kr: "수도 워싱턴을 방문하세요. 그리고 관광객들이 으레 하는 대로 해보세요.",
  },
  {
    en: "133. When someone is relating an important event that's happened to them, don't try to top them with a story of your own. Let them have the stage.",
    kr: "어떤 사람들이 그들에게 일어난 중요한 사건에 연루되어 있을 때, 당신 자신의 이야기로 그들의 수위를 차지하려 하지 마세요. 그들에게도 무대를 허락하세요.",
  },
  {
    en: "134. Don't buy cheap tools. Craftsman tools from Sears are among the best.",
    kr: "싸구려 공구를 사지 마세요. 씨어스사의 장인 공구는 최고 중의 하나입니다.",
  },
  { en: "135. Have crooked teeth straightened.", kr: "치아교정을 하세요." },
  { en: "136. Have dull-colored teeth whitened.", kr: "치아를 새하얗게." },
  {
    en: "137. Keep your watch five minutes fast.",
    kr: "시계를 5분 빠르게 해 놓으세요.",
  },
  {
    en: "138. Learn Spanish. In a few years, more than thirty-five percent of all Americans will speak it as their first language.",
    kr: "스페인어를 배우세요 , 수년 내에 전체 미국인의 35퍼센트 이상이 상용어로 스페인어를 사용할 것입니다.",
  },
  {
    en: "139. Never deprive someone of hope; it might be all they have.",
    kr: "다른 사람의 희망을 빼앗지 마세요. 그것이 그들이 가진 전부일 수 있습니다.",
  },
  {
    en: "140. When starting out, don't worry about not having enough money. Limited funds are a blessing, not a curse. Nothing encourages creative thinking in quite the same way.",
    kr: "시작할 때 충분한 자금을 갖지 못한 것에 대해 걱정치 마세요. 제한된 자금은 저주가 아니라 축복입니다. 똑같은 식으로 창조적 사고를 조장할 수 있는 것은 없습니다.",
  },
  {
    en: "141. Give yourself an hour to cool off before responding to someone who has provoked you. If it involves something really important, give yourself overnight.",
    kr: "당신을 화나게 하는 사람에게 답하기 전에 분노를 식힐 시간을 갖으세요. 만약에 정말 중요한 것을 포함하고 있다면 밤을 새우세요.",
  },
  { en: "142. Pay your bills on time.", kr: "청구서를 제때 납부하세요." },
  {
    en: "143. Join a slow-pitch softball league.",
    kr: "소프트볼 리그에 가입하세요.",
  },
  { en: "144. Take someone bowling.", kr: "볼링하는 사람을 사귀어 두세요." },
  {
    en: "145. Keep a flashlight and extra batteries under the bed and in the glove box of your car.",
    kr: "플래시와 여분의 전지를 침대 밑과 차의 글로브 박스에 상비하세요.",
  },
  {
    en: "146. When playing games with children, let them win.",
    kr: "아이들과 경기를 할 땐 그들이 이기도록 해주세요.",
  },
  {
    en: "147. Turn off the television at dinner time.",
    kr: "저녁 시간에는 텔레비전을 끄세요.",
  },
  {
    en: "148. Learn to handle a pistol and rifle safely.",
    kr: "권총과 소총을 안전하게 다루는 법을 배우세요.",
  },
  {
    en: "149. Skip one meal a week and give what you would have spent to a street person.",
    kr: "한 주에 한끼는 건너뛰고 그것을 부랑인에게 쓰세요.",
  },
  { en: "150. Sing in a choir.", kr: "성가대에서 노래하세요." },
  {
    en: "151. Get acquainted with a good lawyer, accountant, and plumber.",
    kr: "좋은 변호사 , 회계사 , 그리고 배관공과 사귀어두세요.",
  },
  {
    en: "152. Fly Old Glory on the Fourth of July.",
    kr: "독립기념일에는 성조기를 게양하세요.",
  },
  {
    en: "153. Stand at attention and put your hand over your heart when singing the national anthem.",
    kr: "애국가를 부를 때는 기립하여 가슴에 손을 얹으세요.",
  },
  {
    en: "154. Resist the temptation to put a cute message on your answering machine.",
    kr: "자동응답기에 귀여운 메시지를 넣고 싶은 유혹에 저항하세요.",
  },
  {
    en: "155. Have a will and tell your next-of-kin where it is.",
    kr: "유언장을 써놓고 그것이 어디 있는지 가장 가까운 친척에게 말하세요.",
  },
  {
    en: "156. Strive for excellence, not perfection.",
    kr: "‘ 완벽 ’ 이 아닌 ‘ 탁월 ’ 을 위해서 노력하세요.",
  },
  {
    en: "157. Take time to smell the roses.",
    kr: "장미 향기를 맡을 시간을 가지세요.",
  },
  {
    en: "158. Pray not for things, but for wisdom and courage.",
    kr: "물질을 위해 기도하지 말고 지혜와 용기를 위해 기도하세요.",
  },
  {
    en: "159. Be tough minded but tenderhearted.",
    kr: "강인한 가슴을 갖되 다정하세요.",
  },
  { en: "160. Use seat belts.", kr: "좌석 벨트를 사용하세요." },
  {
    en: "161. Have regular medical and dental checkups.",
    kr: "정기적인 의과.치과 검진을 받으세요.",
  },
  {
    en: "162. Keep your desk and work area neat.",
    kr: "당신의 책상과 일터를 깔끔하게.",
  },
  {
    en: "163. Take an overnight train trip and sleep in a Pullman.",
    kr: "심야에 기차여행을 떠나 침대차에서 잠을 자보세요.",
  },
  {
    en: "164. Be punctual and insist on it in others.",
    kr: "먼저 자신이 시간을 지키고 다른 사람에게 요구하세요.",
  },
  {
    en: "165. Don't waste time responding to your critics.",
    kr: "혹평가와 말다툼하는데 시간을 낭비하지 마세요.",
  },
  { en: "166. Avoid negative people.", kr: "부정적인 사람은 피하세요." },
  {
    en: "167. Don't scrimp in order to leave money to your children.",
    kr: "아이들에게 유산을 남기기 위해서 인색하게 살지 마세요.",
  },
  {
    en: "168. Resist telling people how something should be done. Instead, tell them what needs to be done. They will often surprise you with creative solutions.",
    kr: "사람들에게 일이 어떻게 되어야 한다고 말하지 마세요. 대신에 되어야할 일들을 말하세요. 종종 그들은 창의적인 해결책으로 당신을 놀래킬 겁니다.",
  },
  { en: "169. Be original.", kr: "독창적이 되세요." },
  { en: "170. Be neat.", kr: "깔끔해지세요." },
  {
    en: "171. Never give up on what you really want to do. The person with big dreams is more powerful than one with all the facts.",
    kr: "당신이 진정 원하는 것을 절대 포기하지 마세요. 큰 꿈을 가진 사람은 실제적인 것들을 가진 사람보다 더 강력합니다.",
  },
  {
    en: "172. Be suspicious of all politicians.",
    kr: "모든 정치인을 의심해보세요.",
  },
  { en: "173. Be kinder than necessary.", kr: "필요한 것보다 더 친절하게." },
  {
    en: "174. Encourage your children to have a part-time job after the age of sixteen.",
    kr: "18세 이후부터 아이들에게 시간제 아르바이트를 해보도록 격려하세요.",
  },
  {
    en: "175. Give people a second chance, but not a third.",
    kr: "사람들에게 두 번째 기회는 주되 세 번째 기회는 주지 마세요.",
  },
  {
    en: "176. Read carefully anything that requires your signature. Remember the big print giveth and the small print taketh away.",
    kr: "당신의 서명이 필요한 것은 무엇이나 신중히 읽어보세요. 큰 글씨는 무엇인가 주며 작은 글씨는 빼앗아간다는 것을 기억하세요.",
  },
  {
    en: "177. Never take action when you're angry.",
    kr: "화났을 땐 행동을 취하지 마세요.",
  },
  {
    en: "178. Learn to recognize the inconsequential, then ignore it.",
    kr: "이치에 맞지 않는 것을 구별하는 법을 배우세요. 그리고 그런 것은 무시하세요.",
  },
  {
    en: "179. Be your wife's best friend.",
    kr: "아내의 가장 좋은 친구가 되세요.",
  },
  {
    en: "180. Do battle against prejudice and discrimination wherever you find it.",
    kr: "어디서든지 편견과 인종차별에 대하여 싸우세요.",
  },
  { en: "181. Wear out, don't rust out.", kr: "썩혀 두지 말고 다 써버리세요." },
  { en: "182. Be romantic.", kr: "낭만적이 되세요." },
  {
    en: "183. Let people know what you stand for- and what you won't stand for.",
    kr: "사람들에게 당신이 무엇을 찬성하는지 그리고 무엇을 반대하는지 알게 하세요.",
  },
  {
    en: "184. Don't quit a job until you've lined up another.",
    kr: "다른 일을 확보하기 전에는 일을 그만두지 마세요.",
  },
  {
    en: "185. Never criticize the person who signs you paycheck. If you are unhappy with your job, resign.",
    kr: "당신의 급료 지불 수표에 서명을 하는 사람을 헐뜯지 마세요. 당신의 일이 불만스럽다면 그만 두세요.",
  },
  {
    en: `186. Be insatiably curious. Ask "why" a lot.`,
    kr: `만족할 줄 모르는 호기심을 가지세요. "어째서"라고 물으세요`,
  },
  {
    en: "187. Measure people by the size of their hearts, not the size of their bank.",
    kr: "사람을 그가 가진 금전으로 판단하지 말고 그 사람의 가슴으로 판단하세요.",
  },
  {
    en: "188. Become the most positive and enthusiastic person you know.",
    kr: "당신이 아는 한 가장 긍정적이고 열광적인 사람이 되세요.",
  },
  {
    en: "189. Learn how to fix a leaky faucet and toilet.",
    kr: "물이 새는 수도꼭지와 변기를 고치는 법을 배워 두세요.",
  },
  {
    en: "190. Have good posture. Enter a room with purpose and confidence.",
    kr: "좋은 자세를 가지세요. 결의와 신념으로 기회를 잡으세요.",
  },
  {
    en: "191. Don't worry that you can't give your kids the best of everything. Give them your very best.",
    kr: "아이들에게 모든 것을 최상의 것으로 줄 수 없음을 염려하지 마세요. 그들에게 당신이 가진 최상의 것을 주세요.",
  },
  { en: "192. Drink low fat milk.", kr: "저지방 우유를 드세요." },
  { en: "193. Use less salt.", kr: "소금을 조금 덜 쓰세요." },
  { en: "194. Eat less red meat.", kr: "붉은 색 고기는 조금 덜 드세요." },
  {
    en: "195. Determine the quality of a neighborhood, by the manners of the people living there.",
    kr: "거기 사는 사람들의 예의범절로 이웃을 판단하세요.",
  },
  {
    en: "196. Surprise a new neighbor with one of your favorite homemade dishes- and include the recipe.",
    kr: "당신이 좋아하는 '집에서 만드는 요리 ' 중의 하나로 새로 온 이웃을 놀라게 하세요. 그리고 요리법도 포함해서...",
  },
  {
    en: "197. Don't forget, a person's greatest emotional need is to feel appreciated.",
    kr: "사람의 가장 큰 감정적인 욕구는 높이 평가받고 있다고 느끼는 것임을 잊지 마세요.",
  },
  {
    en: "198. Feed a stranger's expired parking meter.",
    kr: "방문자의 주차미터기가 다 되었거든 동전을 넣어주세요.",
  },
  {
    en: "199. Park at the back of the lot at shopping centers. The walk is good exercise.",
    kr: "쇼핑 센터 주차장의 뒤편에 주차시키세요. 걷는 것도 좋은 운동입니다.",
  },
  {
    en: "200. Don't watch violent television shows, and don't buy the products that sponsor them.",
    kr: "폭력적인 텔레비전 쇼는 보지도 말고, 그 프로그램을 후원하는 상품은 사지도 마세요.",
  },
  { en: "201. Don't carry a grudge.", kr: "원한을 품지 마세요." },
  {
    en: "202. Show respect for all living things.",
    kr: "모든 살아있는 것에 경외심을 가지세요.",
  },
  {
    en: "203. Return borrowed vehicles with the gas tank full.",
    kr: "빌린 차를 되돌려줄 땐 연료탱크를 가득 채우세요.",
  },
  {
    en: "204. Choose work that is in harmony with your values.",
    kr: "당신의 가치관에 맞는 일을 고르세요.",
  },
  {
    en: "205. Loosen up. Relax. Except for rare life-and-death matters, nothing is as important as it first seems.",
    kr: "마음을 편하게 하세요. 긴장을 풀어요. 삶과 죽음에 관한 드문 문제들을 제외하고는 처음에 생각되는 것만큼 중요한 것이 없답니다.",
  },
  {
    en: "206. Give your best to your employer. It's one of the best investments you can make.",
    kr: "당신을 고용한 사람에게 최선을 다해보세요. 그것은 당신이 할 수 있는 최선의 투자의 하나랍니다.",
  },
  {
    en: "207. Swing for the fence.",
    kr: "능숙한 변론으로 일을 잘 처리하세요.",
  },
  {
    en: "208. Attend high school art shows, and always buy something.",
    kr: "고교 미술 전시회에 참석해서 항상 무언가 사보세요.",
  },
  { en: "209. Observe the speed limit.", kr: "속도 제한 표지를 살피세요." },
  {
    en: "210. Commit your self to constant self-improvement.",
    kr: "자기 수양에 전념하세요.",
  },
  {
    en: "211. Take your dog to obedience school. You'll both learn a lot.",
    kr: "개를 훈련소에 데려가세요. 개와 당신 모두 많이 배울 수 있을 겁니다.",
  },
  {
    en: "212. Don't allow the phone to interrupt important moments. It's there for your convenience, not the caller's.",
    kr: "중요한 순간을 전화가 방해하게 두지 마세요. 전화는 연락한 사람이 아니라 당신의 편의를 위해 있는 겁니다.",
  },
  {
    en: "213. Don't waste time grieving over past mistakes. Learn from them and move on.",
    kr: "과거의 실수에 대해 슬퍼하는 데 시간을 허비하지 마세요. 그것으로부터 배우고 계속 나아가세요.",
  },
  {
    en: `214. When complimented, a sincere "thank you" is the only response required.`,
    kr: `찬사를 받을 때 , 거짓없는 "감사합니다" 한 마디는 단 하나 필요한 대답입니다.`,
  },
  {
    en: "215. Don't plan a long evening on a blind date. A lunch date is perfect. If things don't work out, both of you have only wasted an hour.",
    kr: "첫 만남에서 긴 밤을 보낼 것을 게획하지 마세요. 점심을 같이 하는 만남도 더할 나위 없습니다. 일이 잘되어가지 않아도 당신 둘은 한 시간 남짓만을 허비한 셈이 됩니다.",
  },
  {
    en: "216. Don't discuss business in elevators. You never know who may overhear you.",
    kr: "승강기에서 일에 대해 의논하지 마세요. 당신은 누가 엿듣는지 결코 알 수 없습니다.",
  },
  { en: "217. Be a good loser.", kr: "훌륭한 패자가 되세요." },
  { en: "218. Be a good winner.", kr: "훌륭한 승자가 되세요." },
  {
    en: "219. Never go grocery shopping when you're hungry. You'll buy too much.",
    kr: "배고플 때 장보러 가지 마세요. 당신은 굉장히 많이 사버릴 겁니다.",
  },
  {
    en: "220. Spend less time worrying who's right, and more time deciding what's right.",
    kr: "누가 옳은 가를 고민하기보다는 무엇이 옳은가를 결정하는데 더 많은 시간을 보내세요.",
  },
  {
    en: "221. Don't major in minor things.",
    kr: "하찮은 것으로 우쭐거리지 마세요.",
  },
  {
    en: "222. Think twice before burdening a friend with a secret.",
    kr: "비밀로 친구를 짐지우기 전에 두 번 생각하세요.",
  },
  { en: "223. Praise in public.", kr: "드러내놓고 칭찬하세요." },
  { en: "224. Criticize in private.", kr: "비공개적으로 비난하세요." },
  {
    en: "225. Never tell anyone they look tired or depressed.",
    kr: "누구에게라도 피곤해 보인다거나 의기소침해 보인다고 말하지 마세요.",
  },
  {
    en: "226. When someone hugs you, let them the first to let go.",
    kr: "누군가 당신을 껴안을 때 , 그이가 놔 줄 때까지 기다리세요.",
  },
  {
    en: "227. Resist giving advice concerning matrimony, finances, or hair styles.",
    kr: "혼인이나 재정 혹은 머리 모양에 관한 조언은 삼가세요.",
  },
  {
    en: "228. Have impeccable manners.",
    kr: "나무랄 데 없는 태도를 보이세요.",
  },
  {
    en: "229. Never pay for work before it's completed.",
    kr: "일이 다 되기 전에는 경비를 지불하지 마세요.",
  },
  { en: "230. Keep good Company.", kr: "좋은 친구를 사귀세요." },
  { en: "231. Keep a daily journal.", kr: "매일 일기를 쓰세요." },
  { en: "232. Keep your promises.", kr: "약속을 지키세요." },
  {
    en: "233. Avoid any church that has cushions on the pews and is considering building a gymnasium.",
    kr: "좌석에 쿠션이 있고 체육관을 지으려하는 교회는 피하세요.",
  },
  {
    en: "234. Teach your children the value of money and the importance of saving.",
    kr: "당신의 아이들에게 돈의 가치와 절약의 중요성을 가르쳐 주세요.",
  },
  {
    en: "235. Be willing to lose a battle in order to win the war.",
    kr: "큰 전쟁에서 이기기 위해 작은 싸움에서 기꺼이 지도록 하세요.",
  },
  {
    en: "236. Don't be decided by first impressions.",
    kr: "첫인상으로 결정하지 마세요.",
  },
  {
    en: "237. Seek out the good in people.",
    kr: "사람에게서 선한 것을 찾으세요.",
  },
  {
    en: "238. Don't encourage rude or inattentive service by tipping the standard amount.",
    kr: "무난한 팁을 주어 무례하고 부주의한 서비스를 조장하지 마세요.",
  },
  {
    en: "239. Watch the movies It's A Wonderful Life every Christmas.",
    kr: `매년 성탄절에는 영화 "아름다운 인생 "을 보세요.`,
  },
  {
    en: "240. Drink eight glasses of water everyday.",
    kr: "매일 여덟 잔의 물을 드세요.",
  },
  { en: "241. Respect tradition.", kr: "전통을 존중하세요." },
  {
    en: "242. Be cautious about lending money to friends. You might lose both.",
    kr: "친구에게 돈을 빌려줄 때 신중하세요. 둘 다 잃을 수 있습니다.",
  },
  {
    en: "243. Never waste an opportunity to tell good employees how much they mean to the company.",
    kr: "훌륭한 고용인들에게 그들이 회사에 얼마나 큰 의미를 가지는지 말할 기회를 놓치지 마세요.",
  },
  {
    en: "244. Buy a bird feeder and hang it so that you can see it form your kitchen window.",
    kr: "새 모이통을 하나 사서 당신 부엌 창에서 볼 수 있도록 걸어두세요.",
  },
  {
    en: "245. Never cut what can be united.",
    kr: "한 덩어리가 될 수 있는 것을 나누지 마세요.",
  },
  {
    en: "246. Wave at children on school buses.",
    kr: "통학버스에 탄 아이들에게 손을 흔들어 주세요.",
  },
  {
    en: "247. Tape record your parents' memories of how they met nand their first years of marriage.",
    kr: "부모님이 어떻게 서로 만났는지 그리고 신혼 첫 해는 어땠는지 녹음해 두세요.",
  },
  {
    en: "248. Show respect for other's time. Call whenever you're going to be more than ten minutes late for an appointment.",
    kr: "다른 사람의 시간을 중시하세요. 약속에 10분 이상 늦겠거든 전화하세요.",
  },
  {
    en: "249. Hire people smarter than you.",
    kr: "당신보다 현명한 사람을 고용하세요.",
  },
  {
    en: "250. Learn to show cheerfulness, even when you don't feel like it.",
    kr: "당신이 느낄 수 없을 것 같을 때라도 명랑하게 보이는 법을 배우세요.",
  },
  {
    en: "251. Learn to show enthusiasm, even when you don't feel like it.",
    kr: "도무지 의욕이 없을 것 같을 때에도 있는 것처럼 보이는 법을 배우세요.",
  },
  {
    en: "252. Take good care of those you love.",
    kr: "당신이 사랑하는 사람을 배려하세요.",
  },
  {
    en: "253. Be modest. A lot was accomplished before you were born.",
    kr: "겸손하세요. 당신이 태어나기 전에 많은 것들이 성취되었답니다.",
  },
  { en: "254. Keep it simple.", kr: "꾸미지 마세요." },
  {
    en: "255. Purchase gas from the neighborhood gas station even if it costs more. Next winter when it's six degrees and your car won't start, you'll be glad they know you.",
    kr: "값이 다소 비싸더라도 이웃의 주유소에서 기름을 넣으세요. 다음해 겨울 , 기온은 화씨 6도, 자가용이 꿈쩍도 않을 때 그들이 당신을 안다는 것이 반가울 겁니다.",
  },
  { en: "256. Don't jaywalk.", kr: "무단횡단하지 마세요." },
  {
    en: "257. Never ask a lawyer or accountant for business advice. They are trained to find problems, not solutions.",
    kr: "법률가나 회계사에게 사업 조언을 구하지 마세요. 그들은 해결책이 아니라 문제점을 찾는데 길들여져 있습니다.",
  },
  {
    en: "258. When meeting someone for the first time, resist asking what they do for a living. Enjoy their company without attaching any labels.",
    kr: "처음으로 누군가를 만난 때는 어떻게 생계를 꾸려 가는지 묻지 마세요. 어떠한 꼬리표도 붙이지 말고 그들과 만난 것을 즐기세요.",
  },
  {
    en: "259. Avoid like the plague any lawsuit.",
    kr: "어떠한 소송에 대해서도 귀찮게 하는 사람을 피하지 마세요.",
  },
  {
    en: "260. Everyday show your family how much you love them with your words, with your touch, and your thoughtfulness.",
    kr: "매일 당신의 말과 당신의 터치 그리고 당신의 사려깊음으로 당신이 가족들을 얼마나 사랑하는지 보여주세요.",
  },
  {
    en: "261. Take family vacations whether you can afford them or not. The memories will be priceless.",
    kr: "여유가 있든지 없든지 간에 가족 휴가를 가세요. 추억은 값을 매길 수 없는 것이 될 겁니다.",
  },
  { en: "262. Don't gossip.", kr: "험담하지 마세요." },
  { en: "263. Don't discuss salaries.", kr: "봉급에 대해서 상의하지 마세요." },
  { en: "264. Don't nag.", kr: "바가지 긁지 마세요." },
  { en: "265. Don't gamble.", kr: "도박은 금물 !" },
  {
    en: "266. Beware of the person who has nothing to lose.",
    kr: "잃을 것이 없는 사람을 조심하세요.",
  },
  {
    en: "267. Lie on your back and look at the stars.",
    kr: "반듯이 누워 별을 바라보세요.",
  },
  {
    en: "268. Don't leave car keys in the ignition.",
    kr: "점화장치에 자동차 열쇠를 꽂아 두지 마세요.",
  },
  { en: "269. Don't whine.", kr: "푸념하지 마세요." },
  {
    en: "270. Arrive at work early and stay beyond quitting time.",
    kr: "일찍 일터에 도착해서 끝나는 시간 이후까지 남으세요.",
  },
  {
    en: "271. When facing a difficult task, act as though it is impossible to fail. If you're going after Moby Dick, take along the tartar sauce.",
    kr: "난관에 직면할 때 절 때 실패할 수 없을 것처럼 행동하세요. '모비딕'을 쫓는다면 타타르주 ( 酒 )를 가지고 가세요.",
  },
  {
    en: "272. Change air conditioner filters every three months.",
    kr: "3개월마다 에어콘 필터를 교체하세요.",
  },
  {
    en: "273. Remember that overnight success usually takes about fifteen years.",
    kr: "하룻밤 새의 성공은 보통 15년이 걸린다는 것을 기억하세요.",
  },
  {
    en: "274. Leave everything a little better that you found it.",
    kr: "무엇이든 당신이 발견했을 때보다 조금이라도 더 낫게 하세요.",
  },
  {
    en: "275. Cut out complimentary newspaper articles about people you know and mail the articles to them with notes of congratulation.",
    kr: "신문에 난 당신이 아는 사람들에 대한 칭찬의 기사를 오려내어 그들에게 축하의 말과 함께 보내세요.",
  },
  {
    en: "276. Patronize local merchants even if it costs a bit more.",
    kr: "조금 비싸더라도 지역 상인의 단골이 되어 주세요.",
  },
  {
    en: "277. Fill your gas tank when it falls below one-quoter full.",
    kr: "연료탱크가 1/4 이하로 채워져 있을 땐 주유하세요.",
  },
  {
    en: "278. Don't expect money to bring you happiness.",
    kr: "금전이 행복을 가져다 줄 것이라고 기대하지 마세요.",
  },
  {
    en: "279. Never snap your fingers to get someone's attention. It's rude.",
    kr: "누군가의 주의를 끌기 위해 손가락으로 소리를 내지 마세요. 무례한 일입니다.",
  },
  {
    en: "280. No matter how dire the situation, keep your cool.",
    kr: "상황이 얼마나 긴박하든 간에 침착하세요.",
  },
  {
    en: "281. When paying cash, ask for a discount.",
    kr: "현금으로 지불할 때는 할인을 요구하세요.",
  },
  { en: "282. Find a good tailor.", kr: "훌륭한 재단사를 찾으세요." },
  {
    en: "283. Don't use a toothpick in public.",
    kr: "공공연하게 이쑤시개를 사용하지 마세요.",
  },
  {
    en: "284. Never underestimate your power to change yourself.",
    kr: "자신을 변화시킬 수 있는 능력을 과소평가하지 마세요.",
  },
  {
    en: "285. Never overestimate your power to change others.",
    kr: "남을 변화시킬 수 있을 당신의 능력을 과대평가하지 마세요.",
  },
  {
    en: "286. Practice empathy. Try to see things from other people's points of views.",
    kr: "감정이입을 연습하세요. 다른 사람의 관점에서 사물을 보도록 노력하세요.",
  },
  { en: "287. Promise big. Deliver big.", kr: "크게 약속하고 크세 행하세요." },
  {
    en: "288. Discipline yourself to save money. It's essential to success.",
    kr: "절약하도록 자신을 훈련시키세요. 성공하는 데 필수적입니다.",
  },
  { en: "289. Get and stay in shape.", kr: "건강을 얻고 지키세요." },
  {
    en: "290. Find some other way of proving your manhood than by shooting defenseless animals and birds.",
    kr: "무방비 상태의 동물이나 새들을 쏘는 것 대신에 당신의 남성다움을 증명할 다른 방법을 찾으세요.",
  },
  {
    en: "291. Remember the deal's not done until the check has clear ed the bank.",
    kr: "수표가 은행에서 현금으로 바뀌기 전까지는 거래가 완결되지 않았다는 것을 기억하세요.",
  },
  {
    en: "292. Don't burn bridges. You'll be surprised how many times you have to cross the same river.",
    kr: "해결책을 없애지 마세요. 같은 난관을 몇 번이나 거쳐야 한다는 것을 알게되면 당신은 놀랄겁니다.",
  },
  {
    en: "93. Don't spread yourself too thin. Learn to say no politely and quickly.",
    kr: "속이 뻔히 보이는 변명은 하지 마세요. 정중하고 빠르게 '아니오'라고 말하는 법을 배우세요.",
  },
  { en: "294. Keep overhead low.", kr: "비용이 적게 들게 하세요." },
  { en: "295. Keep expectations high.", kr: "기대는 높게 하세요." },
  {
    en: "296. Accept pain and disappointment as part of life.",
    kr: "아픔과 실망을 삶의 일부분으로서 받아들이세요.",
  },
  {
    en: "297. Remember that a successful marriage depends on two things: (1) finding the right person and (2) being the right person.",
    kr: "성공적인 결혼생활은 다음 두 가지를 바탕으로 한다는 것을 기억하세요. 더할 나위 없는 사람을 찾는 것과 바로 그런 사람이 되는 것 !",
  },
  {
    en: "298. See problems as opportunities for growth and self-mastery.",
    kr: "성장과 극기의 기회로서 자신의 문제를 보세요.",
  },
  {
    en: "299. Don't believe people when they ask you to be honest with them.",
    kr: "그들에게 솔직히 털어놓으라고 하는 사람들을 믿지 마세요.",
  },
  {
    en: "300. Don't expect life to be fair.",
    kr: "삶에 장애물이 없으리라고 기대하지 마세요.",
  },
  {
    en: "301. Become an expert in time management.",
    kr: "시간관리 전문가가 되세요.",
  },
  {
    en: "302. Lock your car even if it's parked in your own driveway.",
    kr: "당신 집 현관 앞에 주차되어 있을지라도 차를 잠궈 두세요.",
  },
  {
    en: "303. Never go to bed with dirty dishes in the sink.",
    kr: "싱크대에 더러운 접시들을 남겨둔 채로 잠자리에 들지 마세요.",
  },
  {
    en: "304. Judge your success by the degree that you're enjoying peace, health, and love.",
    kr: "당신이 평화와 건강 그리고 사랑을 누리고 있는 정도로 자신의 성공을 판단하세요.",
  },
  {
    en: "305. Learn to handle a handsaw and a hammer.",
    kr: "톱과 망치를 다루는 법을 배우세요.",
  },
  {
    en: "306. Take a nap on Sunday afternoon.",
    kr: "일요일 오후엔 낮잠을 즐기세요.",
  },
  {
    en: "307. Compliment the meal when you're a guest in someone's home.",
    kr: "누군가의 집에 초대받은 때에는 식사가 훌륭했다고 하세요.",
  },
  {
    en: "308. Make the bed when you're an overnight visitor in someone's home.",
    kr: "누군가의 집에서 자고 난 다음에는 침대를 정리하세요.",
  },
  {
    en: "309. Contribute five percent of your income to charity.",
    kr: "수입의 5 퍼센트는 기부하세요.",
  },
  {
    en: "310. Don't leave a ring in the bathtub.",
    kr: "욕조에 반지를 남겨놓지 마세요.",
  },
  {
    en: "311. Don't waste time playing cards.",
    kr: "카드놀이로 시간낭비 마세요.",
  },
  {
    en: "312. When tempted to criticize your parents, spouse, or children,bite your tongue.",
    kr: "부모님이나 배우자 , 아이들을 흠잡고 싶어질 때 혀를 깨무세요.",
  },
  {
    en: "313. Never underestimate the power of love.",
    kr: "사랑의 힘을 과소평가하지 마세요.",
  },
  {
    en: "314. Never underestimate the power of forgiveness.",
    kr: "용서의 힘을 과소평가하지 마세요.",
  },
  {
    en: `315. Don't bore people with your problems.When someone asks you how you feel - say, "Terrific, never better. When they ask, "How's business?" reply, "Excellent, and getting better everyday.`,
    kr: `당신의 문제로 남을 괴롭히지 마세요. 누군가 당신의 기분이 어떻냐고 묻거든 "더할 나위 없이 좋다 "라고 하세요. 누군가 "사업은 어떻게 되어 가느냐 "고 묻거든
"썩 좋습니다. 그리고 매일매일 나아집니다 "라고 대답하세요.`,
  },
  {
    en: "316. Learn to disagree without being disagreeable.",
    kr: "비위를 거슬리지 않고 반대하는 법을 배우세요.",
  },
  {
    en: "317. Be tactful. Never alienate anyone on purpose.",
    kr: "재치있게 사세요. 누구라도 고의로 멀리하지 마세요.",
  },
  {
    en: "318. Hear both sides before judging.",
    kr: "판단하기 전에 양측의 설명을 들으세요.",
  },
  {
    en: "319. Refrain from envy. It's the source of much unhappiness.",
    kr: "질투를 삼가세요. 질투는 많은 불행들의 근원이랍니다.",
  },
  { en: "320. Be courteous to everyone.", kr: "모두에게 정중하세요." },
  {
    en: "321. Wave to crosswalk patrol mothers.",
    kr: "건널목에서 아이들을 보호하는 어머니들에게 손을 흔들어 주세요.",
  },
  {
    en: "322. Don't say you don't have enough time. You have exactly the same number of hours per day that were given Helen Keller, Pasteur, Michelangelo, Mother Teresa, Leonardo da vinchi, Thomas Jefferson, and Albert.",
    kr: "시간이 부족하다고 말하지 마세요. 당신에게는 헬렌 켈러 , 파스퇴로 , 미겔란젤로 , 테레사 수녀 , 레오나르도 다빈치 , 토마스 제퍼슨 그리고 아인스타인에게 주어졌던 것과 똑같은 하루 24시간을 누리고 있습니다.",
  },
  {
    en: "323. When there's no time for a full work-out, do push-ups.",
    kr: "정식적인 운동을 할 여유가 없거든 팔굽혀펴기를 하세요.",
  },
  {
    en: "324. Don't delay acting on a good idea. Chances are someone else has just thought of it, too. Sucess come to the one who acts first.",
    kr: "좋은 아이디어를 행하는 것을 미루지 마세요. 기회란 그것을 생각해난 또 다른 사람의 것이기도 하답니다. 성공이란 먼저 행하는 사람에게 일어나구요",
  },
  {
    en: "325. Be wary of people who tell you how honest they are.",
    kr: "자신들이 얼마나 진실한지 말하는 사람들을 조심하세요.",
  },
  {
    en: "326. Remember that winners do what losers don't want to do.",
    kr: "승자는 패자가 하기 싫어하는 것을 한다는 것을 기억하세요.",
  },
  {
    en: "327. When you arrive at your job in the morning, let the first thing you say brighten everyone's day.",
    kr: "아침에 일터에 도착했을 때 당신이 첫마디가 모든 사람의 하루를 명랑케 하도록 하세요.",
  },
  {
    en: "328. Seek opportunity, not security. A boat in a harbor is safe, but in time its bottom will rot out.",
    kr: "안전무사가 아니라 기회를 찾으세요. 항구에 정박한 배는 안전하지만 동시에 그 밑바닥은 썩어가고 있는 것이랍니다.",
  },
  {
    en: "329. Install smoke detectors in your home.",
    kr: "화재경보기를 집에 설치하세요.",
  },
  {
    en: "330. Rekindle old friendships.",
    kr: "오래된 우정에 다시 불을 붙이세요.",
  },
  {
    en: "331. When traveling, put a card in your wallet with your name, home phone, the phone number of a friend or close relative, important medical information, plus the phone number of the hotel of motel where you're staying.",
    ke: "여행 중에는 카드에다 당신의 이름 , 집 전화 , 친구나 가까운 친척의 전화번호, 중요한 건강 정보 , 머무르고 있는 호텔이나 모텔의 전화번호를 덧 붙여 지갑에 넣어 두세요.",
  },
  {
    en: "332. Live your life as an exclamation, not an explanation.",
    kr: "변명이 아닌 감탄으로서의 삶을 사세요.",
  },
  {
    en: "333. Instead of using the words, if only, try substituting the words,next time.",
    kr: `"~이라면"이란 말 대신에 "다음엔..."이란 말을 쓰도록 노력하세요.`,
  },
  {
    en: "334. Instead of using the word problem, try substituting the word opportunity.",
    kr: `"문제"란 말 대신 "기회"란 말을 쓰도록 하세요.`,
  },
  {
    en: "335. Ever so often push your luck.",
    kr: "될 수 있는 대로 위험을 자초해 보세요 (자신의 운명을 시험해 보세요 ).",
  },
  {
    en: "336. Get your next pet from the animal shelter.",
    kr: "동물 수용소에서 당신의 '다음' 애완동물을 데려오세요.",
  },
  {
    en: "337. Reread your favorite book.",
    kr: "좋아하는 책을 다시 읽어보세요.",
  },
  {
    en: `338. Live your life so that your epitaph could read, "No regrets."`,
    kr: "후회없이 살았단 비문 ( 碑文 )을 위해 사세요.",
  },
  {
    en: "339. Never walk out on a quarrel with your wife.",
    kr: "절대 아내와 다투지마세요",
  },
  {
    en: "340. Don't think a higher price always means higher quality.",
    kr: "항상 높은 가격이 좋은 질을 의미한다고 생각지 마세요.",
  },
  {
    en: "341. Don't be fooled.If something sounds too good to be true, it probably is.",
    kr: "바보 취급당하지 마세요. 진실이라 하기에는 너무 좋게 들리는 것이 있다면, 그것은 아마도 진실일 것입니다.",
  },
  {
    en: "342. When renting a car for a couple of days, splurge and get the big Lincoln.",
    kr: "차를 2-3일 빌릴 땐 돈을 펑펑 쓰더라도 링컨 컨티넨탈로 하세요.",
  },
  {
    en: "343. Regarding furniture and clothes: if you think you'll be using them five years or longer, buy the best you can afford.",
    kr: "가구와 옷에 대해 생각해 보세요. 5년이나 그 이상 사용하려고 한다면 능력에 닿는 한 가장 좋은 것을 구입하세요.",
  },
  {
    en: "344. Patronize drug stores with soda fountains.",
    kr: "소다라도 구입하면서 동네약국의 단골이 되어 주세요.",
  },
  {
    en: "345. Try everything offered by supermarket food demonstrators.",
    kr: "슈퍼마켓의 식품판매원이 제공하는 것은 모두 사용해보세요.",
  },
  {
    en: "346. Be bold and courageous. When you look back on your life, you'll regret the things you didn't do more than the ones you did.",
    kr: "대담하고 용감하세요. 당신의 삶을 뒤돌아볼 때 대담하고 용감하게 행동하지 못한 것들에 대해 후회스러울 것입니다.",
  },
  {
    en: "347. Never waste an opportunity to tell someone you love them.",
    kr: "누구에겐가 당신이 그를 사랑한다고 말할 기회를 놓치지 마세요.",
  },
  { en: "348. Own a good dictionary.", kr: "좋은 사전을 갖도록 하세요." },
  { en: "349. Own a good thesaurus.", kr: "좋은 백과사전을 갖도록 하세요." },
  {
    en: "350. Remember the three most important things when buying a home: location, location, location.",
    kr: "집을 살 땐 가장 중요한 다음 세 가지를 기억하세요. 위치 , 위치 , 위치.",
  },
  {
    en: "351. Keep valuable papers in a bank lockbox.",
    kr: "중요한 서류는 은행 사서함에 보관하세요.",
  },
  {
    en: "352. Just for fun, attend a small town Fourth of July celebration.",
    kr: "순전히 즐거움을 위해 소도시의 독립기념일 축전에 참가해 보세요.",
  },
  {
    en: "353. Go through all your old photographs. Select ten and tape them to your kitchen cabinets. Change them every thirty days.",
    kr: "당신의 옛 사진들을 모두 살펴보세요. 그 중에서 10장을 골라서 부엌 서랍장에 붙여두세요. 매달마다 바꾸어 붙이세요.",
  },
  {
    en: `354. To explain a romantic break-up, simply say, "It was all my fault."`,
    kr: `로맨틱하게 불화를 해명하려면 이렇게 간단히 말하세요. "그건 모두 내 잘못이었소.`,
  },
  {
    en: "355. Evaluate yourself by your own standards, not someone else's.",
    kr: "다른 사람이 아닌 당신의 기준으로 자신을 평가하세요.",
  },
  {
    en: "356. Be there when people need you.",
    kr: "사람들이 당신을 필요로 할 때 그곳에 있으세요.",
  },
  {
    en: "357. Let your representatives in Washington know how you feel. Call (202) 225-3121 for the House and (202) 224-3121 for the Senate. An operator will connect you to the right office.",
    kr: "워싱턴에 있는 당신의 대표자가 당신의 기분이 어떤지 알게 하세요. 백악관 (202) 225-3121번, 의회 (202) 224-3121번으로 전화하세요. 교환원이 적정한 사무실을 연결해 줄 겁니다.",
  },
  {
    en: "358. Be decisive even if it means you'll sometimes be wrong.",
    kr: "당신이 종종 부적당하다는 것을 의미한다 할지라도 과단성 있게 행동하세요.",
  },
  {
    en: "359. Don't let anyone talk you out of pursuing what you know to be great idea.",
    kr: "누구도 당신이 대단한 생각으로 아는 것에 대한 추구에 대해 말하지 못하게 하라.",
  },
  {
    en: "360. Be prepared to lose once in a while.",
    kr: "가끔은 패배를 준비하세요.",
  },
  {
    en: "361. Never eat the last cookie.",
    kr: "맨 마지막 남은 쿠키는 먹지 마세요.",
  },
  {
    en: "362. Know when to keep silent.",
    kr: "침묵해야 할 때를 알도록 하세요.",
  },
  { en: "363. Know when to speak up.", kr: "말해야 할 때를 알도록 하세요." },
  {
    en: "364. Everyday look for some small way to improve your marriage.",
    kr: "매일 당신의 결혼생활을 낫게 할 몇몇 작은 방법들을 찾아보세요.",
  },
  {
    en: "365. Everyday look for some small way to improve the way you do your job.",
    kr: "매일 당신의 일하는 방법을 낫게 할 몇몇 작은 방법들을 찾아보세요.",
  },
  {
    en: "366. Don't flush urinals with your hand - use your elbow.",
    kr: "손으로 소변기 물을 내리지 마세요. 팔꿈치를 쓰세요.",
  },
  {
    en: "367. Acquire things the old-fashioned way: Save for them and pay cash.",
    kr: "예스럽게 물건들을 취득하세요. 돈을 모은 다음 현금으로 지불하는 겁니다.",
  },
  {
    en: "368. Remember no one makes it alone. Have a grateful heart and be quick to acknowledge those who help you.",
    kr: "아무도 혼자만의 힘으로 성공하지는 않는다는 것을 기억하세요. 감사하는 마음을 가지고 당신을 도운 사람들에게 빨리 감사하세요.",
  },
  {
    en: `369. Read "Leadership is an Art" by Max DePree(Dell, 1989).`,
    kr: `맥스 디프리의 "지도력도 기술이다 "(델 출판사 , 1989년)를 읽어보세요.`,
  },
  {
    en: "370. Do business with those who do business with you.",
    kr: "당신과 거래하는 사람들과 거래하세요.",
  },
  {
    en: "371. Just to see how it feels, for the next twenty-four hours refrain from criticizing anybody or anything.",
    kr: "어떤 느낌인지 알아보기 위해서 24시간동안 어느 누구나 어느 것에 대해 비평하는 것을 자제해 보세요.",
  },
  {
    en: "372. Give your clients your enthusiastic best.",
    kr: "당신의 고객에게 열광적인 최선을 보여주세요.",
  },
  {
    en: "373. Let your children overhear you saying complimentary things about them to other adult.",
    kr: "당신의 아이들에게 당신이 다른 어른에게 그들에 대해서 칭찬하는 것을 엿듣게 하세요.",
  },
  {
    en: "374. Work hard to create in your children a good self-image. It's the most important thing you can do to insure their success.",
    kr: "당신의 아이들에게 그들 자신에 대한 좋은 이미지를 심어주기 위해 노력하세요. 그것은 그들의 성공을 보증하기 위해 당신이 할 수 있는 가장 중요한 일입니다.",
  },
  {
    en: "375. Take charge of your attitude. Don't let someone else choose it for you.",
    kr: "당신 자신의 취향을 가지세요. 남들이 당신을 위해 고르게 하진 마세요.",
  },
  {
    en: "376. Save an evening a week for just you and your wife.",
    kr: "당신과 당신의 아내를 위해서 일주일에 하루 저녁은 금식하세요.",
  },
  {
    en: "377. Carry jumper cable s in your car.",
    kr: "차에 충전용 케이블을 가지고 다니세요.",
  },
  {
    en: "378. Get all repair estimates in writing.",
    kr: "글쓰기에서 모든 손질할 곳에 대한 평가를 얻어라.",
  },
  {
    en: "379. Forget committees. New, noble, world-changing ideas come from one person working alone.",
    kr: "위원회는 잊어버리세요. 새롭고 뛰어나며 세계를 바꾸는 아이디어는 홀로 일하는 사람에게서 나온답니다.",
  },
  {
    en: "380. Pay attention to the details.",
    kr: "세부사항에 주의를 기울이세요.",
  },
  { en: "381. Be a self-starter.", kr: "솔선수범하세요." },
  { en: "382. Be loyal.", kr: "의무에 충실하세요." },
  {
    en: "383. Understand that happiness is not based on possessions, power, or prestige, but on relationship with people you love and respect.",
    kr: "행복이란 재산이나 권력 혹은 명성에 있지 않고 당신이 사랑하고 존경하는 사람들과의 관계 속에 있다는 것을 이해하세요.",
  },
  {
    en: "384. Never give a loved one a gift that suggests they need improvement.",
    kr: "개선해야할 필요가 있는 선물을 사랑하는 사람에게 주지 마세요.",
  },
  {
    en: "385. Compliment even small improvements.",
    kr: "조그마한 향상일지라도 칭찬하세요.",
  },
  {
    en: "386. Turn off the tap when brushing your teeth.",
    kr: "이빨을 닦을 땐 물을 잠그세요.",
  },
  {
    en: "387. Wear expensive shoes, belts, and ties, but buy them on sale.",
    kr: "값비싼 신발과 벨트 그리고 넥타이를 하세요. 그러나 세일 때 구입하세요.",
  },
  {
    en: "388. When undecided about what color to paint a room, choose antique white.",
    kr: "방에 무슨 색을 칠할 것인지 결정하지 못했을 땐 고풍의 흰색을 고르세요.",
  },
  {
    en: "389. Carry stamps in your wallet. You never know when you'll discover the perfect card for a friend or loved one.",
    kr: "지갑에 우표를 넣어 가지고 다니세요. 친구나 사랑하는 사람에게 보내고픈 이상적인 엽서를 언제 발견하게 될지 당신은 알 수 없습니다.",
  },
  {
    en: "390. Street musicians are a treasure. Stop for a moment and listen; then leave a small donation.",
    kr: `거리악사들은 '보물'입니다. 잠깐 멈춰 귀를 기울여 보세요. 그리고 자그마한 성의를 남기세요.`,
  },
  {
    en: "391. Support equal pay for equal work.",
    kr: "동등한 일에 공평한 보수를 주세요.",
  },
  { en: "392. Pay your fair share.", kr: "당신의 정당한 몫을 챙기세요." },
  {
    en: "393. Learn how to operate a Macintosh computer.",
    kr: "Mac을 다루는 방법을 배우세요.",
  },
  {
    en: "394. When faced with a serious health problem, get at least three medical opinion.",
    kr: "심각한 건강상의 문제를 접했을 때는 적어도 세 번 진단 받으세요.",
  },
  {
    en: "395. Remain open, flexible, curious.",
    kr: "편견이 없고 융통성 있으며 호기심 많은 사람으로 남으세요.",
  },
  {
    en: "396. Never give anyone a fruitcake.",
    kr: "누구에게도 과일 케익을 절대 주지 마세요.",
  },
  {
    en: "397. Never acquire just one kitten. Two are a lot more fun and no more trouble.",
    kr: "고양이를 딱 한 마리만 키우지는 마세요. 두 마리가 더 재미있고 문제도 없답니다.",
  },
  {
    en: "398. Start meetings on time regardless of who's missing.",
    kr: "있어야할 곳에 없는 사람에 개의치 말고 회의는 제시간에 시작하세요.",
  },
  {
    en: "399. Focus on making things better, not bigger.",
    kr: "일을 크게 벌리는 것 대신 보다 낫게 만드는 일에 초점을 두세요.",
  },
  {
    en: "400. Stay out of nightclubs.",
    kr: "나이트클럽에선 마지막까지 남아 계세요.",
  },
  {
    en: "401. Don't ever watch hot dogs or sausage being made.",
    kr: "만들어지고 있는 핫도그나 소시지를 보지 마세요.",
  },
  {
    en: "402. Begin each day with your favorite music.",
    kr: "하루를 당신이 좋아하는 음악으로 시작하세요.",
  },
  {
    en: "403. Visit your city's night court on a Saturday night.",
    kr: "토요일 밤엔 야간 즉결 심판소엘 들르세요.",
  },
  {
    en: "404. When attending meetings, sit down front.",
    kr: "모임에 참석할 땐 맨 앞자리에 앉으세요.",
  },
  {
    en: "405. Don't be intimidated by doctors and nurses. Even when you're in the hospital, it's still your body.",
    kr: `의사나 간호사들에게서 '협박'당하지 마세요. 당신이 병원에 있을지라도 여전히 당신의 몸이랍니다.`,
  },
  {
    en: "406. Read hospital bills carefully. It's reported that 89% contain errors - in favor of the hospital.",
    kr: "병원 청구서를 주의 깊게 살펴보세요. 청구서의 89 펴센트가 오류가 있다고 보고되었습니다.'병원의 이익을 위하여 ' 말이죠.",
  },
  {
    en: "407. Every once in a while, take the scenic route.",
    kr: "이따금은 경치 좋은 길을 택하세요.",
  },
  {
    en: "408. Don't let your possessions possess you.",
    kr: "당신의 소유가 당신을 소유하도록 하지 마세요.",
  },
  {
    en: "409. Wage war against littering.",
    kr: "혼란에 대한 전쟁을 선포하세요.",
  },
  {
    en: `410. Send a lot of Valentine cards. Sign them, "Someone who thinks you're terrific."`,
    kr: `발렌타인 카드를 많이 보내세요. 거기에다 이렇게 쓰는 겁니다. "당신을 아주 멋지다고 생각하는 사람으로부터..."`,
  },
  { en: "411. Cut your own firewood.", kr: "스스로 장작을 패보세요." },
  {
    en: `412. When you and your wife have a disagreement, regardless of who's wrong, apologize. Say, "I'm sorry I upset you. Would you forgive me?" These are healing, magical words.`,
    kr: `아내와 논쟁을 절이게 되었을 때 누구의 잘못이든 개의치 말고 사과하세요. 이렇게 말하세요. "미안하오. 내가 당신을 혼란스럽게 했구료. 날 용서하겠오 ?"
이들은 상처를 치유하는 신비한 말이랍니다.`,
  },
  {
    en: "413. Don't flaunt your success, but don't apologize for it ether.",
    kr: "당신의 성공을 과시하지도 말고 그것에 대해 사과하지도 마세요.",
  },
  {
    en: "414. After experiencing inferior service, food, or products,",
    kr: "bring it to the attention of the person in charge. Good managers will appreciate knowing.",
    kr: "수준 낮은 서비스 , 음식 혹은 생산품을 경험하였거든 담당자에게 알리세요. 훌륭한 매니저라면 알게된 것을 고맙게 생각할 겁니다.",
  },
  {
    en: "415. Be enthusiastic about the success of others.",
    kr: "남들의 성공에도 열광적이 되세요.",
  },
  {
    en: "416. Don't procrastinate. Do what needs doing when it needs to be done.",
    kr: "늑장부리지 마세요. 해야할 때 하세요.",
  },
  { en: "417. Read to your children.", kr: "아이들에게 책을 읽어주세요." },
  { en: "418. Sing to your children.", kr: "아이들에게 노래를 불러주세요." },
  { en: "419. Listen to your children.", kr: "아이들의 말에 귀를 기울이세요." },
  {
    en: `420. Get your priorities straight. No one ever said on his death bed, "Gee, if I'd only spent more time at the office."`,
    kr: `먼저 해야할 일들을 바로 잡으세요. 그 어느 누구도 죽어가면서 "이런, 사수실에서 좀더 시간을 보냈어야 했어 "하지는 않습니다.`,
  },
  {
    en: "421. Take care of your reputation. It's your most valuable asset.",
    kr: "당신의 평판에 주의를 기울이세요. 그것은 당신의 가장 유용한 자산이랍니다.",
  },
  {
    en: "422. Turn on your headlights when it begins to rain.",
    kr: "비가 내리기 시작하면 헤드라이트를 켜세요.",
  },
  { en: "423. Don't tailgate.", kr: "앞차에 바짝 대어 차를 몰지 마세요." },
  {
    en: "424. Sign and carry your organ donor card.",
    kr: "장기 기증 카드에 서명하고 가지고 다니세요.",
  },
  {
    en: "425. Don't allow self-pity. The moment this emotion strikes,do something nice for someone less fortunate than you.",
    kr: "자기연민에 빠지지 마세요. 이런 감정이 들 땐 당신보다 덜 행복한 사람을 위해 뭔가 좋은 일을 하세요.",
  },
  { en: "426. Share the credit.", kr: "신뢰를 나누세요." },
  {
    en: `427. Don't accept "good enough" as good enough.`,
    kr: `"충분하다"라는 말을 정말 충분하다는 뜻으로 받아들이지는 마세요.`,
  },
  { en: "428. Do more than is expected.", kr: "기대되는 것보다 더 하세요." },
  {
    en: "429. Go to a county fair and check out the 4-H Club exhibits.It will renew your faith in the younger generation.",
    kr: "지역 축제에 가서 4-H 클럽 전시회를 살펴보세요. 젊은 세대에 대한 당신의 믿음을 새롭게 해줄 겁니다.",
  },
  {
    en: "430. Select a doctor your own age so that you can grow old together.",
    kr: "같은 나이의 의사를 선택해 같이 늙어가세요.",
  },
  {
    en: "431. Use club soda as an emergency spot remover.",
    kr: "클럽에서 파는 소다수를 비상용 얼룩 제거제로 사용하세요.",
  },
  {
    en: "432. Improve your performance by improving your attitude.",
    kr: "당신의 자세를 개선해서 성과를 향상시키세요.",
  },
  {
    en: "434. At the movies, buy Junior Mints and sprinkle them on your popcorn.",
    kr: "영화관에서 '주니어 민트 '를 사다가 팝콘에 끼얹어 드세요.",
  },
  {
    en: "435. Make a list of twenty-five things you want to experience before you die. Carry it in your wallet and refer to it often.",
    kr: "죽기 전에 경험하고픈 스물 다섯 가지 일을 목록으로 만드세요. 지갑에 넣고 다니면서 자주 참조하세요.",
  },
  {
    en: "436. Have some knowledge of three religions other than your own.",
    kr: "당신과 다른 세 가지 종교에 대해 약간의 지식을 가져보세요.",
  },
  {
    en: "437. Answer the phone with enthusiasm and energy in your voice.",
    kr: "목소리에 정열과 힘을 넣고 전화를 받으세요.",
  },
  {
    en: "438. Every person that you meet know something you don't; learn from them.",
    kr: "당신이 만나는 모든 사람은 당신이 모르는 것을 알고 있습니다. 그들로부터 배우세요.",
  },
  {
    en: "439. Tape record your parents' laughter.",
    kr: "부모님의 웃음소리를 테이프에 담아 두세요.",
  },
  {
    en: "440. Buy cars that have air bags.",
    kr: "에어백이 장착된 차를 사세요.",
  },
  {
    en: "441. When meeting someone you don't know well, extend your hand and give them your name. Never assume they remember you even if you've met them before.",
    kr: "잘 알지 못하는 사람을 만날 땐 손을 내밀며 이름을 말해주세요. 그들을 이전에 만났을지라도 당신을 기억하리라 생각하지 마세요.",
  },
  { en: "442. Do it the first time.", kr: "맨 처음부터 제대로 하세요." },
  {
    en: "443. Laugh a lot. A good sense of humor cures almost all of life's ill s.",
    kr: "많이 웃으세요. 좋은 유머 감각은 삶에서 오는 병고의 거의 대부분을 고친답니다.",
  },
  {
    en: "444. Never underestimate the power of a kind word or deed.",
    kr: "친절한 말이나 행위의 힘을 과소평가하지 마세요.",
  },
  {
    en: "445. Don't undertip the water just because the food is bad; he didn't cook it.",
    kr: "음식이 형편없다는 이유로 웨이터에게 팁을 적게 주지 마세요. 그가 요리한 건 아니니까요.",
  },
  {
    en: "446. Change your car's oil and filter every three thousand miles regardless of what the owner's manual recommends.",
    kr: "매 3,000 마일마다 자가용의 오일과 필터를 교체해 주세요. 매뉴얼이 뭐라고 권하든 상관말구요.",
  },
  {
    en: "447. Conduct family fire drills. Be sure everyone knows what to do in case the house catches fire.",
    kr: "가족에게 화재 훈련을 지도하세요. 집에 불이 났을 때 무엇을 해야하는지 모두가 알게 하세요.",
  },
  {
    en: `448. Don't be afraid to say, "I don't know."`,
    kr: `"난 모른다 "라고 말하는 것을 두려워하지 마세요.`,
  },
  {
    en: `449. Don't be afraid to say, "I made a mistake."`,
    kr: `"내가 실수했다 "라고 말하는 것을 두려워하지 마세요.`,
  },
  {
    en: `450. Don't be afraid to say, "I need help."`,
    kr: `"도움이 필요해 "라고 말하는 것을 두려워하지 마세요.`,
  },
  {
    en: `451. Don't be afraid to say, "I'm sorry."`,
    kr: `"미안해"라고 말하는 것을 두려워하지 마세요.`,
  },
  {
    en: "452. Never compromise your integrity.",
    kr: "자신 그대로의 당신을 손상시키지 마세요.",
  },
  {
    en: "453. Keep a note pad and pencil on your bedside table. Million-dollar ideas sometimes strike at 3 A.M.",
    kr: "침대 머리맡 테이블에 노트와 연필을 준비해 두세요. 새벽 3시엔 종종 백만달러 짜리 아이디어가 떠오른답니다.",
  },
  {
    en: "454. Show respect for everyone who works for a living, regardless of how trivial their job.",
    kr: "그들의 일이 얼마나 하찮건 간에 삶을 위해서 일하는 모든 사람에게 존경심을 가지세요.",
  },
  {
    en: "455. Read the Sunday New York Times to keep informed.",
    kr: "견문을 넓히기 위해서 일요판 뉴욕 타임즈를 읽으세요.",
  },
  {
    en: "456. Send your loved on flowers. Think of a reason later.",
    kr: "사랑하는 사람에게 꽃을 보내세요. 이유는 나중에 생각하구요.",
  },
  {
    en: "457. Attend your children's athletic contest, plays, and recitals.",
    kr: "아이들의 운동회와 연극 그리고 연주회에 참석하세요.",
  },
  {
    en: "458. When you find a job that's ideal, take it regardless of the pay.",
    kr: "If you've got what it takes, your salary will soon reflect your value to the company.",
    kr: "이상적인 직업을 찾았을 때는 급료에 상관없이 택하세요. 회사가 필요로 하는 것을 당신이 노력하여 얻는다면 급료는 회사에 대한 당신의 가치를 반영할 것입니다.",
  },
  {
    en: "459. Don't use time or words carelessly. Neither can be retrieved.",
    kr: "시간이나 말을 부주의하게 쓰지 마세요. 만회할 수 없습니다.",
  },
  {
    en: "460. Look for opportunities to make people feel important.",
    kr: "사람들이 자신을 중요하다고 느끼도록 만들 기회를 찾으세요",
  },
];

const en = document.querySelector(".quote_en");
const kr = document.querySelector(".quote_kr");

todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

en.innerText = todaysQuote.en;
kr.innerText = todaysQuote.kr;
