/* ═══════════════════════════════════════
   Content — 32 Prank Pages (bilingual)
   ═══════════════════════════════════════ */

const CATEGORIES = [
  { slug: "all",      en: "All",              zh: "全部" },
  { slug: "classic",  en: "Classic",          zh: "经典必装" },
  { slug: "daily",    en: "Daily Life",       zh: "日常生活" },
  { slug: "social",   en: "Social Banter",    zh: "朋友互怼" },
  { slug: "romance",  en: "Romance",          zh: "恋爱甜蜜" },
  { slug: "power",    en: "Power Play",       zh: "霸气排面" },
  { slug: "money",    en: "Money",            zh: "金钱相关" },
];

const CONTENT = [
  // ═══ CLASSIC (经典必装) ═══
  {
    slug: "call-daddy", emoji: "👨", category: "classic",
    en: {
      title: "Call Me Daddy",
      desc: "The classic prank. The 'No' button runs away until they have to call you daddy.",
      tags: ["Classic", "Must-Have", "High Success"],
      body: `<p>The "Call Me Daddy" prank is the undisputed king of all prank pages. It's simple, effective, and has a near-100% success rate when deployed correctly. Here's how it works: your target sees a page with the question "Come on, call me daddy!" and two buttons — one green button that says "Call Me Daddy" and one gray button that says "No Way."</p>
<p>The genius is in the mechanics. Every time they click "No Way," the "Call Me Daddy" button gets progressively larger — literally growing in size, padding, and font weight with each refusal. After two clicks, the "No" button begins teleporting to random positions on screen. After three clicks, it actively flees from the mouse cursor like a scared animal. After four clicks, it teleports every time the mouse gets near it. And after six refusals? The "No" button simply vanishes off-screen entirely, leaving only the massive, screen-filling "Call Me Daddy" button.</p>
<p>This creates an escalating frustration loop that almost always ends with the target giving in and clicking the comply button — at which point a triumphant "Good kid!" message appears. The psychological progression is masterful: from mild annoyance, to frustration, to laughing resignation.</p>
<p>Best used on close friends who can take a joke. Send the link with a casual message like "Hey, check this out" for maximum surprise. Works great in group chats where others can watch the victim's reaction in real time.</p>
<p>The prank takes about 30-60 seconds to play out, making it the perfect length — long enough to be funny, short enough that nobody gets genuinely angry. Pro tip: screen record your friend's reaction for bonus content.</p>`
    },
    zh: {
      title: "叫爸爸版",
      desc: "经典叫爸爸整蛊，不叫按钮越点越跑，最后只能乖乖叫爸爸。",
      tags: ["经典", "必装", "高成功率"],
      body: `<p>"叫爸爸"整蛊是所有整蛊页面中无可争议的王者。简单、高效，部署得当的话成功率接近100%。玩法如下：对方会看到一个页面，上面写着"快，叫爸爸！"和两个按钮——一个绿色的"叫爸爸"按钮和一个灰色的"不叫"按钮。</p>
<p>精妙之处在于机制设计。每次点击"不叫"，"叫爸爸"按钮就会逐渐变大——尺寸、内边距和字体大小都会随着拒绝次数增加。点击两次后，"不叫"按钮开始随机瞬移到屏幕各处。点击三次后，它会主动躲避鼠标光标。点击四次后，每次鼠标靠近它都会瞬移。六次拒绝之后，"不叫"按钮直接消失到屏幕外面，只留下巨大无比的"叫爸爸"按钮占满屏幕。</p>
<p>这形成了一个逐步升级的挫败循环，几乎总是以对方屈服并点击服从按钮而告终——随后会出现一个得意洋洋的"乖儿子/女儿！"弹窗。心理递进堪称大师级：从轻微烦躁，到沮丧，再到笑着认输。</p>
<p>最适合用在能开玩笑的好朋友身上。用轻松的语气发链接，比如"嘿，看看这个"，以达到最大惊喜效果。在群里发效果更佳，其他人可以实时围观受害者的反应。</p>
<p>整个整蛊大约需要30-60秒，长度恰到好处——足够好笑，又不会让人真的生气。专业提示：录屏记录朋友的反应，效果翻倍。</p>`
    }
  },
  {
    slug: "admit-handsome", emoji: "😎", category: "classic",
    en: {
      title: "Admit I'm Handsome",
      desc: "Force friends to admit you're handsome. The refuse button teleports wildly around the screen.",
      tags: ["Narcissistic", "Funny", "Banter"],
      body: `<p>Everyone has that one friend who just won't give you a compliment. The "Admit I'm Handsome" prank is your digital solution to this age-old problem. The page presents a simple question — "Admit it, am I handsome or not?" — with two options: "Handsome!" and "Not really."</p>
<p>Like all great pranks in this toolkit, the "Not really" button is increasingly impossible to click. It starts by teleporting to random positions, then begins actively fleeing from the cursor, and eventually becomes so evasive that clicking it becomes physically impossible. Meanwhile, the "Handsome!" button grows ever larger and more prominent.</p>
<p>The beauty of this prank is its versatility. Use it on your best friend, your sibling, your significant other, or even your parents. The narcissistic framing makes it inherently funny — nobody can take "Admit I'm handsome!" too seriously, which means nobody gets genuinely offended.</p>
<p>This prank works especially well when you've just taken a good selfie or gotten a fresh haircut. Send the link with a photo for maximum comedic effect. The juxtaposition of your actual face with the absurd demand creates a perfect comedic moment.</p>
<p>Duration: about 30-45 seconds of increasingly desperate button-chasing before surrender. The success screen delivers a satisfying "That's more like it!" message that never gets old.</p>`
    },
    zh: {
      title: "承认我帅版",
      desc: "强迫朋友承认你帅，拒绝按钮会疯狂瞬移，直到对方屈服为止。",
      tags: ["自恋", "搞笑", "朋友互怼"],
      body: `<p>每个人都有一个就是不肯夸你的朋友。"承认我帅"整蛊是你解决这个千古难题的数字利器。页面会显示一个简单的问题——"说实话，我帅不帅？"——两个选项："帅！"和"不帅。"</p>
<p>和本工具箱中所有优秀整蛊一样，"不帅"按钮越来越不可能点到。它先是在随机位置瞬移，然后开始主动躲避光标，最终变得完全无法点击。与此同时，"帅！"按钮变得越来越大、越来越显眼。</p>
<p>这个整蛊的美妙之处在于它的多用途性。可以用在死党、兄弟姐妹、对象甚至父母身上。自恋式的框架天然带有喜感——没人会把"承认我帅！"太当回事，所以也不会真的生气。</p>
<p>刚拍了一张不错的自拍或剪了新发型时，效果最佳。把链接和照片一起发过去，喜剧效果拉满。你的真实面孔和荒诞的要求形成的反差正是完美的笑点。</p>
<p>时长：大约30-45秒越来越绝望的追按钮过程，最终投降。成功弹窗写着"这才对嘛！"，永远不会过时。</p>`
    }
  },

  // ═══ DAILY LIFE (日常生活) ═══
  {
    slug: "buy-milktea", emoji: "🧋", category: "daily",
    en: {
      title: "Buy Me Milk Tea",
      desc: "Want your friend to treat you to milk tea? The 'No' button runs away from your cursor.",
      tags: ["Milk Tea", "Treat", "Daily"],
      body: `<p>Milk tea has become a universal love language, and the "Buy Me Milk Tea" prank leverages this cultural phenomenon to hilarious effect. The page asks a simple question: "Can you treat me to a milk tea?" with buttons for "Sure!" and "No, buy your own."</p>
<p>The mechanics follow the classic fleeing-button pattern. Each time the target clicks "No, buy your own," the refusal button becomes harder and harder to click. It teleports, dodges the cursor, and eventually disappears entirely. Meanwhile, the "Sure!" button grows to comical proportions, making it the only clickable option on screen.</p>
<p>What makes this prank particularly effective is how relatable it is. Everyone has been in the "who's buying milk tea today?" conversation. The prank taps into a shared cultural experience, making it instantly understandable and funny across different friend groups.</p>
<p>Use this when you actually want someone to buy you milk tea. Send the link in the morning, then follow up with your order. The combination of digital prank and real-world consequence creates a perfect storm of comedy. Even if they don't actually buy you milk tea, the prank itself is worth the laugh.</p>
<p>Pro tip: time this prank for around 2-3pm — the classic milk tea craving window. Your target is already thinking about their afternoon drink, making them more susceptible to the prank's psychological pressure.</p>`
    },
    zh: {
      title: "请喝奶茶版",
      desc: "想让朋友请喝奶茶？拒绝按钮会躲到屏幕角落，鼠标一靠近就跑。",
      tags: ["奶茶", "请客", "日常"],
      body: `<p>奶茶已经成为当代社交的通用语言，"请喝奶茶"整蛊正是利用了这一文化现象，效果拔群。页面会问一个简单的问题："能请我喝杯奶茶吗？"按钮分别是"好呀！"和"不请，自己买。"</p>
<p>机制遵循经典的逃跑按钮模式。每次点击"不请，自己买"，拒绝按钮就会变得越来越难点到——瞬移、躲避光标、最终彻底消失。而"好呀！"按钮则变得越来越大，成为屏幕上唯一可选的目标。</p>
<p>这个整蛊之所以特别有效，在于它的高度共鸣感。每个人都经历过"今天谁请奶茶？"的对话。它触及了一个共同的文化体验，无论什么朋友圈子都能立刻理解其中笑点。</p>
<p>在你真的想让某人请你喝奶茶的时候用。早上发链接，然后跟进你的订单。数字整蛊加现实后果的组合创造出了完美的喜剧风暴。就算他们最后没真的请你，这个整蛊本身也够好笑了。</p>
<p>专业提示：把时间控制在下午2-3点——经典的奶茶渴望窗口期。对方本来就在想着下午茶，心理防线更薄弱，更容易中招。</p>`
    }
  },
  {
    slug: "chat-with-me", emoji: "💬", category: "daily",
    en: {
      title: "Chat With Me",
      desc: "Want someone to chat? The 'Busy' button runs away, while the chat button grows huge.",
      tags: ["Chat", "Companion", "Daily"],
      body: `<p>We've all been left on read. The "Chat With Me" prank is a playful way to call out that friend who's been ignoring your messages. The page presents a friendly request — "Can you chat with me for a bit?" — with options to "Let's Chat!" or "I'm Busy."</p>
<p>Of course, the "I'm Busy" button is a digital mirage. Each attempt to click it results in increasingly absurd evasion tactics. The button jumps to random corners, slides away from the cursor, and eventually becomes completely inaccessible. The "Let's Chat!" button, sensing victory, expands to dominate the entire interface.</p>
<p>This prank has a special charm because it's simultaneously aggressive and endearing. You're technically forcing someone to interact with you, but the medium — a silly web page with a cartoonish fleeing button — makes it impossible to take seriously. It's the digital equivalent of tugging on someone's sleeve.</p>
<p>Best deployed when you're genuinely bored and your friend has been inactive in the group chat for too long. The prank says "I want your attention" in a way that's funny rather than needy. Most targets cave within 20-30 seconds, often laughing by the end.</p>
<p>Duration is quick — about 20-40 seconds — making it perfect for a spontaneous laugh in the middle of a conversation. Follow up with actual conversation to complete the bit.</p>`
    },
    zh: {
      title: "陪我聊天版",
      desc: "想让朋友陪你聊天？没空按钮满屏乱窜，陪聊按钮持续放大。",
      tags: ["聊天", "陪伴", "日常"],
      body: `<p>谁没被已读不回伤过心？"陪我聊天"整蛊是一个轻松有趣的方式，来点一下那个一直无视你消息的朋友。页面发出友好的请求——"能陪我聊会天吗？"——选项是"来聊！"和"没空。"</p>
<p>当然，"没空"按钮是一个数字幻象。每次尝试点击它，都会触发越来越荒唐的逃跑策略。按钮跳到随机角落、从光标下滑走、最终完全无法触及。而"来聊！"按钮则感知到了胜利的气息，膨胀到占满整个界面。</p>
<p>这个整蛊有一种特别的魅力，因为它同时具有侵略性和可爱感。从技术上讲，你在强迫别人跟你互动，但媒介——一个有着卡通化逃跑按钮的搞笑网页——让人根本无法认真对待。这就像数字版的拽袖子。</p>
<p>最佳使用时机：当你真的无聊了，而你的朋友在群里沉默太久。这个整蛊用一种有趣而非黏人的方式表达了"我需要你的关注"。大多数目标在20-30秒内就会投降，往往到最后都在笑。</p>
<p>时长很短——大约20-40秒——非常适合在对话中途来个即兴笑料。整蛊结束后记得真的开始聊天，才算完成整个套路。</p>`
    }
  },
  {
    slug: "treat-meal", emoji: "🍕", category: "daily",
    en: {
      title: "Treat Me a Meal",
      desc: "Make them buy you a meal. The 'No' button runs completely off screen and becomes unreachable.",
      tags: ["Meal", "Treat", "Food"],
      body: `<p>Food is the ultimate social currency, and the "Treat Me a Meal" prank weaponizes it for maximum comedic effect. The page asks: "How about treating me to a meal?" with the options "My Treat!" and "No way, I'm broke."</p>
<p>The refusal button's behavior is among the most aggressive in the entire toolkit. It doesn't just teleport — it actively sprints to the farthest corner of the screen. By the final stages, the button literally positions itself completely outside the viewport, making it physically impossible to click. The "My Treat!" button, meanwhile, balloons to occupy the entire screen.</p>
<p>What sets this prank apart is the universal appeal of food. Nobody can stay mad when pizza is involved, even conceptually. The prank taps into the shared experience of "who's paying?" that every friend group knows intimately. It's a low-stakes, high-reward social play.</p>
<p>Deploy this prank around lunch or dinner time for maximum impact. Your target is already hungry, which means they're thinking about food — and more susceptible to the suggestion. The best part? Sometimes the prank actually results in a free meal, because the target finds it so funny they agree to treat you for real.</p>
<p>The full prank cycle takes about 30-50 seconds. The off-screen button mechanic at the end is the perfect punchline — there's something deeply funny about a button that has literally fled the scene.</p>`
    },
    zh: {
      title: "请我吃饭版",
      desc: "让朋友请你吃饭，免谈按钮直接跑到屏幕外面根本点不到。",
      tags: ["吃饭", "请客", "美食"],
      body: `<p>食物是终极的社交货币，"请我吃饭"整蛊将其武器化以达到最大喜剧效果。页面会问："请我吃顿饭怎么样？"选项是"我请客！"和"免谈，我没钱。"</p>
<p>拒绝按钮的攻击性是整个工具箱中最猛的之一。它不仅仅是瞬移——而是主动冲刺到屏幕最远的角落。到了最后阶段，按钮直接跑到视窗范围之外，变得物理上无法点击。而"我请客！"按钮则膨胀到占据整个屏幕。</p>
<p>这个整蛊的独特之处在于食物带来的普遍魅力。当披萨参与其中时（哪怕只是概念上的），没人能保持愤怒。它触及了每个朋友圈子都熟知的"谁买单？"这一共同体验。这是一场低成本、高回报的社交行为。</p>
<p>在午餐或晚餐时间前后部署效果最佳。你的目标本来就在饿着，满脑子都是吃的——更容易被暗示影响。最棒的部分？有时候这个整蛊真的能换来一顿免费的饭，因为对方觉得太好笑了，居然真的同意请你了。</p>
<p>完整整蛊周期大约30-50秒。最后的屏幕外按钮设计是完美的笑点——一个直接逃离了现场的按钮，很难不让人觉得好笑。</p>`
    }
  },
  {
    slug: "wash-dishes", emoji: "🍽️", category: "daily",
    en: {
      title: "Wash the Dishes",
      desc: "Make them volunteer for dish duty. The 'No' button runs from every attempt to click it.",
      tags: ["Chores", "Dishes", "Daily"],
      body: `<p>Nobody likes doing the dishes. The "Wash the Dishes" prank turns this universal household dread into a hilarious interactive experience. The page asks: "Will you wash the dishes today?" with buttons for "Fine, I'll do it" and "No way, your turn!"</p>
<p>The fleeing button mechanics are in full effect here. Each refusal makes the "No way" button harder to pin down, as it bounces around the screen like a greased plate. The "Fine, I'll do it" button grows progressively larger, eventually becoming the only reasonable choice — much like how dish duty eventually becomes unavoidable in real life.</p>
<p>This prank is tailor-made for roommates, couples living together, or family members who share kitchen duties. It gamifies the age-old chore dispute in a way that's impossible to take seriously. By the time your target is laughing at the absurdity of a button that literally runs away from responsibility, they've already lost the argument.</p>
<p>Best sent right after a shared meal when the sink is visibly full. The visual reminder of actual dirty dishes adds a layer of real-world context that makes the prank land even harder. Follow up by actually doing the dishes together — the prank breaks the ice, making the actual chore feel less tedious.</p>
<p>Duration is about 25-40 seconds. The metaphor of a button running from responsibility is one that resonates deeply with anyone who's ever lived with other humans.</p>`
    },
    zh: {
      title: "洗碗版",
      desc: "让朋友主动去洗碗，不洗按钮四处逃窜，洗按钮越变越大。",
      tags: ["家务", "洗碗", "日常"],
      body: `<p>没人喜欢洗碗。"洗碗"整蛊把这种普遍的家务恐惧变成了一场搞笑的互动体验。页面会问："今天你洗碗好不好？"按钮分别是"好吧我去洗"和"不要，轮到你！"</p>
<p>逃跑按钮的机制在这里全面发力。每次拒绝都让"不要"按钮更难被抓住，它像涂了油的盘子一样在屏幕上弹来弹去。"好吧我去洗"按钮则逐渐变大，最终成为唯一合理的选择——就像现实生活中，碗迟早得有人洗一样。</p>
<p>这个整蛊专为室友、同居情侣或分担厨房家务的家人量身打造。它以一种无法被认真对待的方式游戏化了这场古老的家务争端。当你的目标被一个"逃避责任的按钮"逗笑的时候，他们实际上已经输掉了这场争论。</p>
<p>最佳发送时机是刚吃完饭后，水槽里明显堆满碗碟的时刻。真实脏碗碟的视觉提醒增加了一层现实语境，让整蛊更加有力。整蛊结束后不妨真的一起洗碗——这个整蛊打破了僵局，让真正的家务变得不那么枯燥。</p>
<p>时长大约25-40秒。一个逃避责任的按钮这个隐喻，和任何跟别人一起住过的人都能产生深刻共鸣。</p>`
    }
  },
  {
    slug: "do-laundry", emoji: "👕", category: "daily",
    en: {
      title: "Do the Laundry",
      desc: "Make them volunteer for laundry. The refuse button keeps dodging every click.",
      tags: ["Chores", "Laundry", "Daily"],
      body: `<p>Laundry is the chore that never ends, and the "Do the Laundry" prank makes it just a little more entertaining. The page presents a simple scenario: "Can you do the laundry today?" with two buttons — "OK, I'll handle it" and "Nope, you do it."</p>
<p>In classic prank fashion, the "Nope" button becomes progressively more evasive with each click. It teleports randomly, flees from the cursor, and eventually ends up in unreachable territory. The compliance button grows to fill the screen, mirroring the inevitability of laundry itself — you can run from it, but you can't hide forever.</p>
<p>This prank resonates particularly well with anyone who's ever lived in a shared space. The laundry argument is a universal constant of cohabitation, and this prank turns it into something to laugh about rather than fight about. It's conflict resolution through absurdist humor.</p>
<p>Send this to your roommate when the laundry basket is visibly overflowing. The physical evidence strengthens the prank's persuasive power. Even if they don't actually end up doing the laundry, you'll both get a good laugh — and that's worth at least one load of whites.</p>
<p>The prank plays out in about 25-40 seconds. The success message delivers a cheerful "Laundry hero!" that softens the blow of what is, after all, a chore assignment.</p>`
    },
    zh: {
      title: "洗衣服版",
      desc: "让朋友主动去洗衣服，不洗按钮疯狂躲避点击，洗按钮越变越大。",
      tags: ["家务", "洗衣服", "日常"],
      body: `<p>洗衣服是一项永远做不完的家务，"洗衣服"整蛊让它变得稍微有趣了一些。页面展示了一个简单的场景："今天你洗衣服好不好？"两个按钮——"好，我来洗"和"不要，你洗。"</p>
<p>经典整蛊风格下，"不要"按钮随着每次点击变得越来越不可捉摸。它随机瞬移、逃避光标、最终落入无法触及的领域。服从按钮则变得越来越大，充满整个屏幕，映射了洗衣这件事的不可避免性——你可以逃，但你躲不了一辈子。</p>
<p>这个整蛊特别能引起任何住过合租空间的人的共鸣。洗衣争论是合住生活中永恒不变的话题，而这个整蛊把它从争吵对象变成了笑料。这是通过荒诞主义幽默实现的冲突化解。</p>
<p>当洗衣篮明显满出来的时候发给室友。实物证据能加强整蛊的说服力。就算他们最后没真的去洗衣服，你们两个也会笑得很开心——而这至少值一桶白衣服。</p>
<p>整蛊大约25-40秒结束。成功弹窗写着欢乐的"洗衣英雄！"，至少能缓和一下被分配家务的打击感。</p>`
    }
  },
  {
    slug: "clean-room", emoji: "🧹", category: "daily",
    en: {
      title: "Clean the Room",
      desc: "Make them agree to clean up. The 'No' button evades capture with increasingly absurd tactics.",
      tags: ["Cleaning", "Room", "Chores"],
      body: `<p>A messy room is a universal source of tension in any shared living situation. The "Clean the Room" prank transforms this tension into comedy by presenting the question: "Will you clean the room today?" with the options "OK, I'll clean" and "Nope, your mess!"</p>
<p>The refusal button employs the full arsenal of evasion tactics. It starts with simple teleportation, escalates to cursor detection and flight, and ultimately positions itself completely off-screen. The compliance button grows in lockstep with each refusal, eventually occupying most of the visible screen real estate.</p>
<p>This prank shines in roommate dynamics. It's the perfect passive-aggressive-but-actually-just-funny way to bring up the state of the living room. The humor diffuses what could otherwise be an awkward conversation about cleanliness standards. Your roommate will be too busy laughing at a button that's literally running away from them to feel genuinely called out.</p>
<p>Send it while you're both in the same room for maximum effect. Watch their face as they realize what's happening — the moment of recognition is often funnier than the prank itself. The shared laugh might actually motivate a joint cleaning session.</p>
<p>The prank runs about 20-35 seconds. The success screen's "Sparkling clean!" message provides a satisfying, if ironic, conclusion.</p>`
    },
    zh: {
      title: "打扫房间版",
      desc: "让朋友同意打扫房间，不打扫按钮花式逃跑，打扫按钮越变越大。",
      tags: ["打扫", "房间", "家务"],
      body: `<p>乱糟糟的房间是所有合住生活中的普遍摩擦点。"打扫房间"整蛊把这种摩擦转化成了喜剧，它提出的问题是："今天你打扫房间好不好？"选项是"好，我来打扫"和"不要，你弄乱的！"</p>
<p>拒绝按钮使用了全套逃避战术。先是简单的瞬移，然后升级到光标检测和逃离，最后直接把自己放到屏幕外面去。服从按钮则随着每次拒绝同步增长，最终占据了大部分可见屏幕空间。</p>
<p>这个整蛊在室友关系中尤其出彩。它是那种表面被动攻击但实际纯粹好笑的完美方式，用来提起客厅现状这个话题。幽默感化解了原本可能关于清洁标准的尴尬对话。你的室友会忙着笑一个正在逃跑的按钮，根本顾不上感到被针对。</p>
<p>两个人在同一个房间时发送效果最佳。看他们发现怎么回事时的表情——那个意识到被整的瞬间通常比整蛊本身还好笑。共同的笑声说不定还能激励一次联合大扫除。</p>
<p>整蛊大约20-35秒结束。成功弹窗写着"闪闪发亮！"，给了一个满意而又讽刺的结局。</p>`
    }
  },
  {
    slug: "cook-for-me", emoji: "🍳", category: "daily",
    en: {
      title: "Cook For Me",
      desc: "Make them promise to cook. The 'No' button runs away from any attempt to click it.",
      tags: ["Cooking", "Food", "Daily"],
      body: `<p>There's something special about a home-cooked meal, and the "Cook For Me" prank is a lighthearted way to angle for one. The page asks: "Will you cook for me today?" with buttons for "I'll cook something delicious!" and "Cook it yourself!"</p>
<p>The "Cook it yourself!" button demonstrates an extraordinary will to survive. It dodges, weaves, teleports, and eventually vanishes from the screen entirely. The cooking button, by contrast, grows more appetizing by the second — expanding to fill the screen like a rising soufflé of compliance.</p>
<p>This prank works wonderfully in romantic relationships, close friendships, or family settings. It's flirty without being demanding, playful without being pushy. The implicit compliment — "your cooking is worth pranking for" — often lands before the target even realizes they're being pranked.</p>
<p>Best deployed when you know the target actually enjoys cooking. The prank becomes less about forcing someone and more about giving them a funny excuse to show off their culinary skills. Follow up by offering to handle the dishes — fair's fair, after all.</p>
<p>Duration is 20-35 seconds. The success screen's "Master Chef!" proclamation adds a final touch of playful flattery that makes the whole experience feel like a compliment wrapped in a prank.</p>`
    },
    zh: {
      title: "做饭给我吃版",
      desc: "让朋友答应给你做饭，不做按钮疯狂逃跑，做饭按钮越变越大。",
      tags: ["做饭", "美食", "日常"],
      body: `<p>家常菜有一种特别的魔力，"做饭给我吃"整蛊就是一个轻松的蹭饭方式。页面会问："今天做饭给我吃好不好？"按钮分别是"给你做好吃的！"和"自己做去！"</p>
<p>"自己做去！"按钮展现出了非凡的求生欲。它闪躲、迂回、瞬移、最终从屏幕上完全消失。而做饭按钮则每秒钟都变得更加诱人——像一个膨胀中的舒芙蕾一样充满屏幕。</p>
<p>这个整蛊在恋爱关系、亲密友谊或家庭环境中效果极佳。它带着暧昧但不强求，玩乐但不咄咄逼人。那个隐含的赞美——"你做的饭值得我用整蛊来求"——往往在对方还没意识到自己被整的时候就已传达了。</p>
<p>最佳使用时机是当你知道对方确实喜欢做饭的时候。这个整蛊不再像是强迫某人，而更像是给他们一个有趣的借口来炫耀厨艺。整蛊之后主动提出洗碗——毕竟公平最重要。</p>
<p>时长大约20-35秒。成功弹窗写着"大厨！"，加上了最后一抹调皮的奉承，让整个体验就像是一个包在整蛊里的赞美。</p>`
    }
  },
  {
    slug: "fetch-delivery", emoji: "📦", category: "daily",
    en: {
      title: "Fetch My Delivery",
      desc: "Get someone to grab your package. The 'No' button slips away from every click attempt.",
      tags: ["Delivery", "Errands", "Daily"],
      body: `<p>Your phone buzzes — a delivery has arrived! But you're comfortably on the couch. Enter the "Fetch My Delivery" prank, the laziest way to get someone else to answer the door. The page asks: "Can you grab my delivery for me?" with options "Sure, I'll get it!" and "Get it yourself!"</p>
<p>The "Get it yourself!" button demonstrates Olympic-level evasion skills. It reads the cursor position and actively flees in the opposite direction, teleports when cornered, and eventually positions itself in digital exile. The helpful button, meanwhile, grows to represent the only reasonable course of action.</p>
<p>This prank is peak relatable content for the e-commerce era. Everyone who's ever ordered something online knows the dilemma of hearing the doorbell while being maximally comfortable. The prank captures this specific modern experience perfectly, making it instantly funny to anyone under 40.</p>
<p>Send this to whoever you live with when you're expecting a package. The timing is crucial — the prank is funniest when the delivery is actually at the door. The real-world urgency adds stakes to the digital game, creating a race between the fleeing button and the delivery person's patience.</p>
<p>Duration: 20-30 seconds of fast-paced button chasing. The success message — "Package secured!" — provides a satisfying conclusion to this micro-adventure.</p>`
    },
    zh: {
      title: "帮我拿快递版",
      desc: "让人帮你拿快递，不拿按钮滑不溜秋根本点不到。",
      tags: ["快递", "跑腿", "日常"],
      body: `<p>手机响了——快递到了！但你正舒服地窝在沙发里。于是"帮我拿快递"整蛊登场了，这是让别人帮忙开门的最懒方式。页面会问："帮我拿下快递好吗？"选项是"好的我去拿！"和"自己去拿！"</p>
<p>"自己去拿！"按钮展现出了奥运级别的躲避技巧。它读取光标位置、主动反向逃离、被逼到角落就瞬移、最终将自己流放到数字世界的边疆。而帮忙按钮则不断变大，代表着唯一合理的选择。</p>
<p>这个整蛊是电商时代的共鸣巅峰。每个在网上买过东西的人都知道那种门铃响了自己却处于最舒适状态时的两难处境。这个整蛊完美捕捉了这种特定的现代体验，任何40岁以下的人都能立刻明白笑点。</p>
<p>当你预计有包裹要送到时，发给和你住在一起的人。时机至关重要——当快递真的在门口时整蛊最好笑。现实世界的紧迫感为这个数字游戏增加了赌注，在逃跑按钮和快递员耐心之间创造了一场竞赛。</p>
<p>时长：20-30秒的快节奏追按钮。成功弹窗——"快递到手！"——给这个微型冒险画上了令人满意的句号。</p>`
    }
  },
  {
    slug: "charge-phone", emoji: "🔋", category: "daily",
    en: {
      title: "Charge My Phone",
      desc: "Get someone to plug in your phone. The 'No' button dodges every attempt to click.",
      tags: ["Phone", "Lazy", "Daily"],
      body: `<p>Your phone is at 3% and the charger is all the way across the room. The "Charge My Phone" prank is your digital solution to this modern inconvenience. The page asks: "Can you charge my phone for me?" with buttons "OK, give it here" and "Charge it yourself!"</p>
<p>The refusal button wastes no time in its escape routine. It begins teleporting after the very first click, establishing early that resistance is futile. By the third click, it's actively running from the cursor. By the fifth, it's gone — vanished to wherever unhelpful buttons go when they realize they've lost.</p>
<p>This prank represents the pinnacle of lazy innovation. It uses sophisticated JavaScript animation to accomplish the simplest of goals: not having to stand up. There's something deeply funny about deploying technology this advanced for a task this mundane.</p>
<p>Best used when you're both in the same room. The physical proximity adds a layer of irony — they could just say no verbally, but the prank draws them into the digital game anyway. Send the link via text even though they're right next to you for maximum comedic absurdity.</p>
<p>The entire experience wraps up in 20-30 seconds. The success screen's "Phone saved!" message is the perfect anticlimax for such an over-engineered request.</p>`
    },
    zh: {
      title: "帮我充电版",
      desc: "让人帮你插充电器，不帮按钮东躲西藏，帮忙按钮越变越大。",
      tags: ["手机", "偷懒", "日常"],
      body: `<p>手机只剩3%电量，充电器在房间的另一头。"帮我充电"整蛊就是你应对这种现代不便的数字解决方案。页面会问："帮我充下电好吗？"按钮是"好，拿来吧"和"自己充去！"</p>
<p>拒绝按钮丝毫不浪费时间，第一次点击后就开始瞬移，早早宣告了抵抗的徒劳性。第三次点击后，它已经在主动逃避光标。第五次之后，它消失了——去了所有无用的按钮意识到自己失败后会去的那个地方。</p>
<p>这个整蛊代表了懒惰创新的巅峰。它使用了复杂的JavaScript动画来实现最朴素的目标：不用站起来。用这么先进的技术来处理这么平凡的任务，这件事本身就蕴含着深深的喜感。</p>
<p>最佳使用场景是两人同处一室的时候。物理上的近距离增加了一层讽刺——他们明明可以直接口头拒绝，但整蛊还是把他们拉进了数字游戏里。就算他们就在你身边，也用短信发链接，以获得最大的喜剧荒诞效果。</p>
<p>整个体验在20-30秒内结束。成功弹窗写着"手机有救了！"，对这样一个过度设计的请求来说，这是最完美的虎头蛇尾式结局。</p>`
    }
  },

  // ═══ SOCIAL BANTER (朋友互怼) ═══
  {
    slug: "praise-me", emoji: "🌟", category: "social",
    en: {
      title: "Praise Me",
      desc: "Force friends to praise you. The refuse button jumps all over the screen.",
      tags: ["Praise", "Ego Boost", "Funny"],
      body: `<p>Everyone deserves a compliment now and then, and the "Praise Me" prank ensures you get yours — by force if necessary. The page asks: "Come on, say something nice about me!" with options to "You're awesome!" or "Pass."</p>
<p>The "Pass" button is programmed to be the most frustrating element on the page. It teleports, dodges, and actively flees from user interaction, making it essentially impossible to select. Meanwhile, the "You're awesome!" button undergoes a dramatic growth spurt, becoming the dominant element on screen.</p>
<p>What makes this prank special is how it weaponizes positivity. Unlike pranks that demand submission (calling someone daddy, admitting they're handsome), this one asks for a compliment — something friends should do anyway. The prank becomes less about dominance and more about comedic encouragement.</p>
<p>This is the perfect prank for when you're feeling down and need a pick-me-up. Send it to your best friend with a message like "I need this today." The combination of vulnerability and humor is disarming, and most friends will happily play along — especially once they realize the button won't let them do otherwise.</p>
<p>About 25-40 seconds of increasingly desperate button evasion, ending with a warm "You're the best!" success message that actually feels good to receive.</p>`
    },
    zh: {
      title: "夸我厉害版",
      desc: "逼朋友夸你厉害，拒绝按钮满屏乱跳，夸人按钮大到占满屏幕。",
      tags: ["求夸", "膨胀", "搞笑"],
      body: `<p>每个人都应该时不时得到赞美，而"夸我厉害"整蛊确保你能得到——必要时用强制手段。页面会问："快，夸我一句！"选项是"你太厉害了！"和"略过。"</p>
<p>"略过"按钮被编程为页面上最令人沮丧的元素。它瞬移、闪躲、主动逃离用户交互，使其基本上不可能被选中。而"你太厉害了！"按钮则经历了一场戏剧性的成长狂欢，成为屏幕上的主导元素。</p>
<p>这个整蛊的特别之处在于它将积极性武器化。不像那些要求服从的整蛊（叫爸爸、承认我帅），这个是在要求赞美——本来就是朋友应该做的事情。整蛊不再是关于支配，而更多是关于喜剧性的鼓励。</p>
<p>这是当你心情低落、需要一点安慰时的完美整蛊。把它发给你的死党，附上一条"我今天需要这个"的消息。脆弱与幽默的结合是卸下防备的利器，大多数朋友会乐意配合——尤其是在他们意识到按钮不让他们做别的选择之后。</p>
<p>大约25-40秒越来越绝望的按钮躲避战，结尾是一个温暖的"你最棒了！"成功弹窗，收到时真的会让你感觉不错。</p>`
    }
  },
  {
    slug: "apologize", emoji: "🙇", category: "social",
    en: {
      title: "Apologize",
      desc: "Make stubborn friends apologize. The refuse button vanishes and teleports randomly.",
      tags: ["Apology", "Admit", "Stubborn"],
      body: `<p>Some people would rather chew glass than say "I'm sorry." The "Apologize" prank is designed specifically for these stubborn souls. The page presents a gentle request: "Don't you think you should apologize?" with buttons for "I'm sorry" and "I did nothing wrong."</p>
<p>The "I did nothing wrong" button is a masterclass in digital gaslighting. It appears to be a valid choice — but upon attempting to click, the user discovers it's anything but. The button fades, teleports, shrinks, and ultimately disappears, as if the universe itself is rejecting their refusal to apologize.</p>
<p>This prank works best in the aftermath of a minor disagreement — the kind where everyone knows who should apologize but nobody wants to say it first. The prank serves as an icebreaker, turning a potentially awkward situation into a shared laugh. By the time they click "I'm sorry," the original conflict usually feels trivial.</p>
<p>The psychological design is subtle but effective. Unlike other pranks where the target is clearly the victim, this one positions them as someone who needs to do the right thing. It's a prank with a moral compass — annoying enough to be funny, gentle enough to not cause actual offense.</p>
<p>Duration is about 25-40 seconds. The success screen provides a gentle "Apology accepted" that serves as a genuine resolution, not just a punchline.</p>`
    },
    zh: {
      title: "认错道歉版",
      desc: "让嘴硬的朋友认错道歉，拒绝按钮会自动隐身闪现，认错按钮占满全屏。",
      tags: ["道歉", "认错", "嘴硬"],
      body: `<p>有些人宁可吞玻璃也不愿说"对不起"。"认错道歉"整蛊就是专门为这些嘴硬的灵魂设计的。页面提出了一个温柔的请求："你是不是应该道个歉？"按钮分别是"对不起我错了"和"我又没错。"</p>
<p>"我又没错"按钮是数字煤气灯效应的经典之作。它看起来像是一个有效的选项——但当用户尝试点击时，它们发现完全不是那么回事。按钮渐隐、瞬移、缩小、最终消失，仿佛整个宇宙都在拒绝他们不肯道歉的倔强。</p>
<p>这个整蛊最适合用在小摩擦之后——那种大家都知道谁该道歉但没人愿意先说的情况。整蛊充当了破冰者，把可能尴尬的局面变成了一起笑的机会。等他们终于点了"对不起我错了"的时候，原本的冲突往往已经显得微不足道了。</p>
<p>心理设计微妙但有效。不像其他目标明显是受害者的整蛊，这个把对方定位为需要做正确事情的人。这是一个有道德指南针的整蛊——足够烦人以制造笑声，又足够温和以免造成真正的冒犯。</p>
<p>时长大约25-40秒。成功弹窗写着温柔的"原谅你了"，这既是一个笑点，也是一个真正的和解。</p>`
    }
  },
  {
    slug: "sing-song", emoji: "🎤", category: "social",
    en: {
      title: "Sing For Me",
      desc: "Make them promise to sing. The 'No' button dodges and weaves like it's on stage.",
      tags: ["Singing", "Karaoke", "Funny"],
      body: `<p>Not everyone is a born performer, but the "Sing For Me" prank doesn't care about vocal talent. The page asks: "Will you sing a song for me?" with buttons for "OK, what should I sing?" and "Absolutely not!"</p>
<p>The "Absolutely not!" button seems to have stage fright — it runs, hides, teleports, and ultimately exits the stage entirely. The singing button, meanwhile, grows to headliner proportions, demanding the spotlight. The visual metaphor of stage presence is baked right into the button behavior.</p>
<p>This prank is perfect for the group chat right before karaoke night. It sets the tone — everyone's going to have to sing eventually, so they might as well get comfortable with the idea now. Even for those who hate singing, the prank format makes the prospect feel less intimidating.</p>
<p>Use it as a karaoke icebreaker. Send it to the friend who always says "I don't sing" but secretly knows every word to every song. The prank gives them permission to perform by making the request so absurd that refusing feels sillier than agreeing.</p>
<p>Duration: 20-35 seconds of button pursuit, culminating in a "Encore!" success message that's equal parts encouragement and mockery.</p>`
    },
    zh: {
      title: "唱歌给我听版",
      desc: "让人答应唱歌给你听，不唱按钮像躲聚光灯一样四处逃跑。",
      tags: ["唱歌", "卡拉OK", "搞笑"],
      body: `<p>并非每个人都是天生的表演者，但"唱歌给我听"整蛊不在乎你的唱功如何。页面会问："唱首歌给我听好不好？"按钮是"好啊，唱什么？"和"坚决不唱！"</p>
<p>"坚决不唱！"按钮似乎患上了舞台恐惧症——它逃跑、躲藏、瞬移、最终彻底离场。而唱歌按钮则膨胀到压轴演出的规格，要求聚光灯的焦点。舞台表现的视觉隐喻直接融入在按钮行为之中。</p>
<p>这个整蛊非常适合在卡拉OK之夜前发到群里。它定下了基调——每个人迟早都要唱，不如现在就做好心理准备。即使那些讨厌唱歌的人，整蛊的形式也会让这个前景显得不那么可怕。</p>
<p>把它当作卡拉OK破冰工具。发给那个总说"我不唱歌"但私底下每首歌歌词都倒背如流的朋友。整蛊把请求变得如此荒诞，以至于拒绝比同意显得更傻，从而给了他们表演的许可。</p>
<p>时长：20-35秒的追按钮之旅，最终以"再来一首！"的成功弹窗收尾，既是鼓励也是打趣。</p>`
    }
  },
  {
    slug: "tell-joke", emoji: "🤡", category: "social",
    en: {
      title: "Tell Me a Joke",
      desc: "Force someone to tell you a joke. The 'No' button escapes every click attempt.",
      tags: ["Jokes", "Humor", "Funny"],
      body: `<p>Demanding a joke from someone who isn't in the mood is a special kind of social gamble. The "Tell Me a Joke" prank removes the gamble and guarantees a punchline. The page asks: "Tell me a funny joke!" with options "Here's one..." and "I don't know any jokes."</p>
<p>The "I don't know any jokes" button puts on a comedy show of its own — pratfalling across the screen, slipping away from the cursor like a banana peel on a polished floor. The joke-telling button grows to comedic proportions, becoming the straight man to the refusal button's slapstick routine.</p>
<p>This prank has a secret secondary function: it actually does make people tell jokes. Once they've clicked the compliance button, social momentum usually carries them into actually delivering a joke. The success screen's "Let's hear it!" message opens the door for a real punchline to follow.</p>
<p>Great for breaking up a boring conversation or lightening the mood in a group chat. Everyone has at least one terrible joke stored in their memory, and this prank is the key that unlocks it. Even if the joke is awful, the prank setup guarantees that the overall experience is still funny.</p>
<p>Duration: 20-30 seconds of button antics, followed by however long it takes them to remember a joke.</p>`
    },
    zh: {
      title: "讲笑话给我听版",
      desc: "强迫朋友讲笑话，不讲按钮花式逃跑，讲笑话按钮越变越大。",
      tags: ["笑话", "幽默", "搞笑"],
      body: `<p>让一个没心情的人讲笑话是一种特殊的社交赌博。"讲笑话给我听"整蛊消除了赌注，保证必有笑点。页面会问："给我讲个好笑的笑话！"选项是"好，听好了..."和"我不会讲笑话。"</p>
<p>"我不会讲笑话"按钮上演了自己的喜剧表演——在屏幕上摔跤打滚，像光洁地板上的香蕉皮一样从光标下滑走。讲笑话按钮则膨胀到滑稽的尺寸，成为拒绝按钮闹剧表演的捧哏。</p>
<p>这个整蛊有一个隐藏的次要功能：它真的会让人讲笑话。一旦他们点击了服从按钮，社交惯性通常会促使他们真的讲出一个笑话来。成功弹窗写着"说来听听！"，为真正的笑点打开了大门。</p>
<p>非常适合打破无聊的对话或在群里活跃气氛。每个人脑子里都至少存着一个超烂的笑话，而这个整蛊就是打开它的钥匙。即便笑话本身很烂，整蛊的铺垫也能保证整个体验依然是搞笑的。</p>
<p>时长：20-30秒的按钮闹剧，然后是对方回忆一个笑话需要的时间。</p>`
    }
  },
  {
    slug: "admit-fat", emoji: "🍔", category: "social",
    en: {
      title: "Admit You're Getting Fat",
      desc: "Make them face the truth. The 'No' button runs from every click with guilty speed.",
      tags: ["Roast", "Fat", "Banter"],
      body: `<p>This prank is for close friends only — the kind who can trade insults without taking offense. "Admit You're Getting Fat" presents a cheeky question: "Be honest, have you gained weight recently?" with buttons "OK fine, maybe a little..." and "I'm in perfect shape!"</p>
<p>The "I'm in perfect shape!" button is as evasive as the truth it's denying. It bounces around the screen with guilty energy, fleeing from the cursor like calories from a treadmill. The admission button grows steadily, representing the growing… well, you get the metaphor.</p>
<p>This prank walks a fine line between roasting and actual insult, which is exactly what makes it funny. The target knows immediately that it's a joke — the medium of a silly web page with a fleeing button makes that clear. But the subject matter adds just enough sting to make the laugh meaningful.</p>
<p>Deploy with extreme caution and only among friends who already engage in this kind of banter. The prank is designed to be obviously absurd, but humor is subjective. If there's any doubt about whether the target will find it funny, choose a different prank from the toolkit.</p>
<p>Duration: 25-40 seconds. The success screen's defeated "Yeah, I knew it..." message adds a self-deprecating touch that takes the edge off the roast.</p>`
    },
    zh: {
      title: "承认长胖版",
      desc: "让朋友面对现实，不承认按钮带着心虚疯狂逃窜。",
      tags: ["互损", "长胖", "死党"],
      body: `<p>这个整蛊仅限于死党之间使用——那种可以互相损来损去而不生气的关系。"承认长胖"提出了一个厚脸皮的问题："说实话，你最近是不是胖了？"按钮是"好吧好像是胖了点..."和"我身材好得很！"</p>
<p>"我身材好得很！"按钮就像它所否认的真相一样充满逃避性。它带着心虚的能量在屏幕上弹跳，像跑步机上的卡路里一样逃离光标。承认按钮稳步增长，代表着日益增长的……算了，你懂的。</p>
<p>这个整蛊走在损人和真正冒犯之间的钢丝上，这也正是它的好笑之处。目标立刻明白这是一个玩笑——一个有着逃跑按钮的搞笑网页这种媒介已经足够说明问题。但主题本身增加了恰到好处的刺痛感，让笑声有了深意。</p>
<p>使用时务必备加谨慎，只限那些已经有互损传统的朋友。这个整蛊的设计意图是显而易见的荒诞，但幽默是主观的。如果对目标是否会觉得好笑有任何疑虑，请从工具箱中选择其他整蛊。</p>
<p>时长：25-40秒。成功弹窗写着沮丧的"唉，我就知道..."，这种自我调侃式的收尾，让这个损人整蛊也变得柔和了许多。</p>`
    }
  },
  {
    slug: "tell-secret", emoji: "🤫", category: "social",
    en: {
      title: "Tell Me a Secret",
      desc: "Get someone to spill their secrets. The 'No' button vanishes into digital secrecy.",
      tags: ["Secret", "Gossip", "Curiosity"],
      body: `<p>Everyone loves a secret — especially when it's someone else's. The "Tell Me a Secret" prank feeds our universal appetite for gossip with a playful digital twist. The page whispers: "Tell me a secret you've never told anyone..." with buttons for "OK, just between us..." and "I have no secrets!"</p>
<p>The "I have no secrets!" button is, ironically, full of hidden behavior. It conceals itself in random screen positions, slips away from the cursor like a well-kept confidence, and eventually retreats to the digital shadows. The secret-sharing button expands to full-screen prominence, as if to say "there's no hiding from this."</p>
<p>This prank creates a fascinating social dynamic. The playful format lowers defenses, making people more willing to share something — though usually nothing genuinely sensitive. The prank context provides plausible deniability: "I only told you because the button made me!"</p>
<p>Best used one-on-one rather than in group settings. The intimate framing of "just between us" works better in private conversations. The prank often leads to actual interesting revelations, making it one of the more conversation-starting entries in the toolkit.</p>
<p>Duration: 25-35 seconds of button hide-and-seek, followed by the genuine human moment the prank was designed to create.</p>`
    },
    zh: {
      title: "说出秘密版",
      desc: "让人说出一个秘密，不说按钮躲进数字世界的暗处彻底消失。",
      tags: ["秘密", "八卦", "好奇心"],
      body: `<p>每个人都爱听秘密——尤其是别人的秘密。"说出秘密"整蛊以调皮的数字方式满足了我们普遍的八卦欲望。页面轻声问道："告诉我一个你从来没说过的秘密..."按钮是"好，就我们俩知道..."和"我没有秘密！"</p>
<p>讽刺的是，"我没有秘密！"按钮满是隐藏行为。它把自己藏在随机屏幕位置，像一段精心保管的心事一样从光标下滑走，最终退入数字世界的暗影之中。分享秘密的按钮则扩展到全屏显眼位置，仿佛在说"躲不掉的"。</p>
<p>这个整蛊创造了一种迷人的社交动态。这种调皮的格式降低了心理防线，让人们更愿意分享一些东西——虽然通常不是什么真正敏感的事情。整蛊的语境提供了合理的推脱："是按钮逼我说的！"</p>
<p>最好在一对一的情况下使用，而不是群聊环境。"就我们俩知道"的亲密框架在私人对话中效果更好。这个整蛊往往能引出真正有趣的坦白，使其成为整个工具箱中最能引发对话的项目之一。</p>
<p>时长：25-35秒的按钮捉迷藏，然后是整蛊旨在创造的那个真实的人类时刻。</p>`
    }
  },
  {
    slug: "write-letter", emoji: "✍️", category: "social",
    en: {
      title: "Write a Guarantee Letter",
      desc: "Get them to write a promise letter. The 'No' button literally writes itself off screen.",
      tags: ["Promise", "Letter", "Funny"],
      body: `<p>Sometimes you need things in writing. The "Write a Guarantee Letter" prank is for those moments when a verbal promise isn't enough. The page requests: "Write me a guarantee letter, will you?" with options "Fine, I'll write it" and "Your word is enough!"</p>
<p>The "Your word is enough!" button demonstrates that words are, in fact, not enough — at least not for this button to stay put. It scribbles its way across the screen, dodging the cursor with calligraphic flair, and eventually writes itself right out of the visible area. The letter-writing button grows to document-sized proportions.</p>
<p>This prank has a distinctly Chinese cultural flavor, where written guarantee letters (保证书) are a common humorous trope in friendships and relationships. The concept translates well across cultures, though — everyone understands the comedy of demanding something in writing for something trivial.</p>
<p>Perfect for when your friend promises to do something and you want playful accountability. "You said you'd come to the gym — write me a guarantee!" The prank makes the interaction funny rather than nagging, which means the promise is more likely to actually be kept.</p>
<p>Duration: 25-40 seconds, ending with a "Signed and sealed!" success message that gives the whole thing a mock-official air.</p>`
    },
    zh: {
      title: "写保证书版",
      desc: "让人写保证书，不写按钮自己把自己写出屏幕外面去。",
      tags: ["保证书", "承诺", "搞笑"],
      body: `<p>有时候你需要白纸黑字。"写保证书"整蛊就是为那些口头承诺不够用的时刻准备的。页面提出请求："给我写个保证书呗？"按钮是"好，我写"和"口头说就行了！"</p>
<p>"口头说就行了！"按钮证明，口头说确实不够——至少对这个按钮来说无法让它待在原地。它带着书法般的潇洒在屏幕上蜿蜒逃窜，躲避光标，最终把自己"写"出了可视区域。写保证书的按钮则膨胀到文件大小的比例。</p>
<p>这个整蛊具有鲜明的中国特色，保证书在朋友和恋爱关系中是一个常见的幽默桥段。不过这个理念在跨文化中也很好理解——每个人都能理解要求为一件小事出具书面文件的喜剧效果。</p>
<p>非常适合当你朋友承诺做某件事而你想用有趣的方式追责时。"你说你会去健身房的——给我写保证书！"这个整蛊让互动变得有趣而非唠叨，这意味着那个承诺更有可能真的被兑现。</p>
<p>时长：25-40秒，以"签字画押！"的成功弹窗收尾，给整件事增添了一份仿官方的仪式感。</p>`
    }
  },
  {
    slug: "dance-for-me", emoji: "💃", category: "social",
    en: {
      title: "Dance For Me",
      desc: "Make someone promise to dance. The 'No' button has two left feet and trips all over the screen.",
      tags: ["Dance", "Performance", "Funny"],
      body: `<p>Not everyone has rhythm, but the "Dance For Me" prank believes in you. The page asks: "Will you dance for me?" with buttons "OK, but don't laugh!" and "I have two left feet!"</p>
<p>True to its claim, the "I have two left feet!" button stumbles and bumbles across the screen with all the grace of a toddler at a wedding reception. It trips over cursor proximity, spins away from click attempts, and eventually collapses into digital embarrassment. The dancing button breaks out its best moves, expanding to fill the dance floor.</p>
<p>This prank is pure joy in web form. It's impossible to stay self-conscious about dancing when you're being pranked by a button that literally can't stand still. The absurdity is liberating — if a button can dance (badly), so can you.</p>
<p>Deploy this before a party, a night out, or any situation where dancing might occur. It sets a playful tone and lowers inhibitions. The prank essentially peer-pressures the target into agreeing to dance, but in a way that feels like a joke rather than actual pressure.</p>
<p>Duration: 20-35 seconds of clumsy button choreography, capped with a "Show me your moves!" success message.</p>`
    },
    zh: {
      title: "跳舞给我看版",
      desc: "让人答应跳舞给你看，不跳按钮像不会跳舞的人在屏幕上东倒西歪。",
      tags: ["跳舞", "表演", "搞笑"],
      body: `<p>不是每个人都有节奏感，但"跳舞给我看"整蛊相信你。页面会问："跳个舞给我看好不好？"按钮是"好，但不许笑！"和"我不会跳舞！"</p>
<p>诚如其所言，"我不会跳舞！"按钮带着婚礼上蹒跚学步的幼童般的优雅，在屏幕上跌跌撞撞。它被光标靠近就绊倒，点击尝试来了就旋转逃离，最终在数字尴尬中彻底崩溃。跳舞按钮则拿出了最好的舞步，膨胀到占满整个舞池。</p>
<p>这个整蛊是网页形式的纯粹快乐。当你在被一个根本停不下来的按钮整蛊时，根本不可能还对跳舞保持难为情。这种荒诞感解放了你——如果一个按钮都能跳舞（跳得很烂），你也可以。</p>
<p>在派对、夜生活或任何可能涉及跳舞的场合之前部署。它会定下一种调皮的基调，降低心理防线。这个整蛊本质上是在用同伴压力促使目标同意跳舞，但方式感觉像是个玩笑而非真正的压力。</p>
<p>时长：20-35秒的笨拙按钮编舞，最后以"秀出你的舞步！"成功弹窗收尾。</p>`
    }
  },

  // ═══ ROMANCE (恋爱甜蜜) ═══
  {
    slug: "confess-love", emoji: "💕", category: "romance",
    en: {
      title: "Confess Love",
      desc: "Simulate a love confession. The refuse button drifts around and is impossible to click.",
      tags: ["Confession", "Romance", "Sweet"],
      body: `<p>The love confession is one of the most nerve-wracking human experiences. The "Confess Love" prank turns it into a game. The page gently asks: "I like you... will you go out with me?" with buttons for "Yes, I like you too!" and "Let's just be friends."</p>
<p>The "Let's just be friends" button is a masterwork of romantic evasion. It doesn't just run — it floats, drifts, and meanders across the screen like it's trying to let you down easy. The cursor approach makes it scatter like a startled crush. The "Yes" button, meanwhile, blooms like a flower in fast-forward, filling the screen with digital affection.</p>
<p>This prank is surprisingly versatile. Use it as an actual icebreaker for a real confession (the humor takes the pressure off), as a joke between established couples, or as a playful tease among friends. The romantic framing makes it inherently charming — even when the target knows it's a prank, the sweetness of the concept shines through.</p>
<p>The mechanics are tuned to be gentler than other pranks. The refusal button's movement is smoother, more floaty, less aggressive. This isn't about domination — it's about creating a cute, flirty moment. The success screen's hearts and warm message reinforce the romantic-comedy tone.</p>
<p>Duration: 25-40 seconds of romantic button pursuit. Best paired with actual feelings for maximum effect.</p>`
    },
    zh: {
      title: "表白同意版",
      desc: "模拟表白场景，拒绝按钮满屏漂移根本点不中，只能同意。",
      tags: ["表白", "恋爱", "甜蜜"],
      body: `<p>表白是人类最令人紧张的体验之一。"表白同意版"整蛊把它变成了一场游戏。页面温柔地问道："我喜欢你...能和我在一起吗？"按钮分别是"好，我也喜欢你！"和"我们还是做朋友吧。"</p>
<p>"我们还是做朋友吧"按钮是浪漫逃避的杰作。它不只是逃跑——它在漂浮、漂流、蜿蜒穿过屏幕，仿佛在尽量婉转地拒绝。光标靠近时它像受惊的暗恋之心一样四散逃离。而"好"按钮则如快镜头中的花朵般绽放，用数字化的爱意填满整个屏幕。</p>
<p>这个整蛊的用途出人意料地多样化。可以用作真正表白的破冰工具（幽默感能减轻压力），也可以作为已确定关系情侣之间的玩笑，还可以是朋友之间的调皮戏弄。浪漫的框架使其天生迷人——即使对方知道这是整蛊，这个概念本身的甜度也能闪闪发光。</p>
<p>机制调校得比其他整蛊更加温柔。拒绝按钮的移动更平滑、更轻盈、不那么具有攻击性。这不是关于支配——而是为了创造一个可爱、暧昧的瞬间。成功弹窗里的爱心和温暖文字强化了浪漫喜剧的基调。</p>
<p>时长：25-40秒的浪漫追按钮之旅。配合真实好感一起使用效果最佳。</p>`
    }
  },
  {
    slug: "say-i-love-you", emoji: "💝", category: "romance",
    en: {
      title: "Say I Love You",
      desc: "Get those three magic words. The 'No' button flees from affection like a tsundere.",
      tags: ["Love", "Sweet", "Couples"],
      body: `<p>Three words, eight letters — say it and I'm yours. The "Say I Love You" prank is a playful way to fish for those magic words. The page asks warmly: "Say you love me!" with buttons for "I love you!" and "That's embarrassing..."</p>
<p>The "That's embarrassing..." button embodies tsundere energy — outwardly resistant but secretly wanting to be caught. It dodges and weaves with bashful speed, blushing its way around the screen. The "I love you!" button grows with all the confidence of someone who's not afraid of their feelings.</p>
<p>This prank is tailor-made for couples in that cute, early stage where saying "I love you" still feels momentous. It turns a potentially weighty moment into something light and funny. The prank says "I want to hear you say it" without the vulnerability of asking directly.</p>
<p>Also works wonderfully as a pick-me-up in long-term relationships. After years together, the "I love you"s can become routine. This prank injects playfulness back into those three words, reminding both of you of the butterflies from the early days.</p>
<p>Duration: 20-35 seconds. The success screen delivers a reciprocated "I love you too!" that makes the whole thing feel like a warm hug in digital form.</p>`
    },
    zh: {
      title: "说爱我版",
      desc: "让TA说出那三个字，不说按钮像傲娇一样躲避爱的表达。",
      tags: ["爱", "甜蜜", "情侣"],
      body: `<p>三个字，说出来我就是你的。"说爱我"整蛊是一个调皮的钓出那三个魔幻字眼的方式。页面暖暖地问道："说你爱我！"按钮是"我爱你！"和"好肉麻啊..."</p>
<p>"好肉麻啊..."按钮充满了傲娇能量——表面上抗拒，暗地里其实想被抓住。它带着羞涩的速度闪躲迂回，红着脸在屏幕上四处游走。而"我爱你！"按钮则以一种不怕表达情感的人特有的自信不断增长。</p>
<p>这个整蛊专为处于那个可爱早期阶段的情侣量身打造——在那个说出"我爱你"仍然感觉意义重大的时期。它把一个可能有分量的时刻变成了轻松有趣的事情。这个整蛊在表达"我想听你说"的同时，避免了直接开口的脆弱感。</p>
<p>在长期关系中作为调节剂也同样出色。多年之后，"我爱你"可能变成了例行公事。这个整蛊为这三个字重新注入了调皮的活力，让你们两人都想起了早期的悸动。</p>
<p>时长：20-35秒。成功弹窗回应了一句"我也爱你！"，让整个过程感觉就像是数字形式的温暖拥抱。</p>`
    }
  },
  {
    slug: "be-my-valentine", emoji: "💘", category: "romance",
    en: {
      title: "Be My Valentine",
      desc: "A Valentine's Day special. The 'No' button gets struck by Cupid's arrow and flees.",
      tags: ["Valentine", "Romance", "Seasonal"],
      body: `<p>Valentine's Day creates equal parts excitement and anxiety. The "Be My Valentine" prank channels the former while eliminating the latter. The page asks the classic question: "Will you be my Valentine?" with buttons for "Yes, I'd love to!" and "Sorry, I'm busy that day."</p>
<p>The "Sorry, I'm busy" button behaves as if struck by Cupid's arrow — but instead of falling in love, it falls into a panic. It darts around the screen like someone trying to avoid eye contact with a street canvasser. The "Yes" button grows heartwarmingly large, eventually filling the screen with Valentine's Day spirit.</p>
<p>This is a seasonal special that works in multiple contexts. Use it to actually ask someone to be your Valentine (the joke format makes rejection less awkward for both parties), as a cute gesture to your already-established Valentine, or as a joke among single friends celebrating Galentine's or anti-Valentine's Day.</p>
<p>The prank captures the Valentine's Day aesthetic with hearts, warm colors, and a generally affectionate tone. It's festive without being overbearing, romantic without being cringey. Even Valentine's Day skeptics usually crack a smile.</p>
<p>Duration: 25-35 seconds of love-struck button chaos, sealed with a "It's a date!" success message.</p>`
    },
    zh: {
      title: "做我情人节版",
      desc: "情人节特别版，拒绝按钮被丘比特之箭射中后疯狂逃窜。",
      tags: ["情人节", "浪漫", "节日限定"],
      body: `<p>情人节既让人兴奋又让人焦虑。"做我情人节"整蛊继承了前者，消除了后者。页面问出了那个经典的问题："做我的情人节对象好吗？"按钮是"好呀！"和"不好意思那天我有事。"</p>
<p>"不好意思那天我有事"按钮表现得好像被丘比特之箭射中了一般——但不是坠入爱河，而是陷入了恐慌。它像躲避街头推销员眼神交流的人一样在屏幕上四处乱窜。"好呀"按钮则暖心地变大，最终用情人节的氛围填满整个屏幕。</p>
<p>这是一个适用于多种场景的节日限定版。可以用它来真的邀请某人做你的情人节对象（玩笑的形式让拒绝变得不那么尴尬），作为对已确定关系的情人节对象的可爱表示，或者作为单身朋友们在闺蜜节或反情人节活动中的搞笑环节。</p>
<p>这个整蛊完美捕捉了情人节的审美——爱心、暖色调和总体上的深情基调。它很喜庆但不浮夸，浪漫但不肉麻。即使是情人节怀疑论者也通常会破防一笑。</p>
<p>时长：25-35秒的爱神之箭引发的按钮混乱，以"约会确定！"成功弹窗封缄。</p>`
    }
  },

  // ═══ POWER PLAY (霸气排面) ═══
  {
    slug: "call-boss", emoji: "👑", category: "power",
    en: {
      title: "Call Me Boss",
      desc: "Make them call you boss. The 'Impossible' button flees from the cursor.",
      tags: ["Boss", "Respect", "Power"],
      body: `<p>Respect isn't given — it's taken, one fleeing button at a time. The "Call Me Boss" prank establishes dominance through JavaScript. The page commands: "From now on, you call me Boss!" with buttons for "Yes, Boss!" and "In your dreams!"</p>
<p>The "In your dreams!" button is about to become a nightmare. It evades capture with increasingly desperate tactics — teleportation, cursor detection, rapid relocation. Each failed click feeds the "Yes, Boss!" button's growth, both literally (on screen) and figuratively (in the social hierarchy being established).</p>
<p>This prank has a particular appeal in Chinese internet culture, where calling someone "大哥" (big brother/boss) carries specific social weight. The concept translates well across cultures, though — every language has a term for the person in charge, and this prank helps you claim that title.</p>
<p>Best used in group chats where social hierarchies are already a running joke. The prank becomes part of the ongoing bit about who's really in charge. By the time your friend clicks "Yes, Boss!", they've officially — if jokingly — acknowledged your supremacy.</p>
<p>Duration: 30-45 seconds of power-struggle button dynamics, ending with a regal "That's more like it, Boss!" confirmation.</p>`
    },
    zh: {
      title: "喊我大哥版",
      desc: "让朋友喊大哥，不可能按钮鼠标一碰就跑，喊大哥按钮越点越大。",
      tags: ["大哥", "排面", "霸气"],
      body: `<p>尊重不是被给予的——是通过逃跑按钮一步步夺取的。"喊我大哥"整蛊通过JavaScript建立支配地位。页面命令道："以后见了我，叫大哥！"按钮分别是"好的大哥！"和"做梦去吧！"</p>
<p>"做梦去吧！"按钮即将变成噩梦。它以越来越绝望的策略逃避捕捉——瞬移、光标检测、快速位移。每次失败的点击都在滋养"好的大哥！"按钮的成长，无论是字面上（屏幕上）还是比喻意义上（正在建立的社会等级中）。</p>
<p>这个整蛊在中国互联网文化中有着特别的吸引力，叫"大哥"带有特定的社交分量。这个概念在跨文化中也很容易理解——每种语言都有对掌权者的称呼，而这个整蛊帮你赢得那个头衔。</p>
<p>最适合在群聊中使用，那些社会等级已经成为日常梗的地方。这个整蛊成为了关于"谁才是真正的话事人"这个长期段子的一部分。当你的朋友最终点击"好的大哥！"时，他们已经正式——虽然是开玩笑地——承认了你的至高地位。</p>
<p>时长：30-45秒的权力斗争按钮大戏，以一句威严的"这才对嘛，大哥！"确认弹窗收尾。</p>`
    }
  },
  {
    slug: "call-queen", emoji: "👸", category: "power",
    en: {
      title: "Call Me Queen",
      desc: "Assert your royal status. The 'No' button bows out gracefully (by running away).",
      tags: ["Queen", "Royalty", "Power"],
      body: `<p>Every friend group has someone who deserves a crown. The "Call Me Queen" prank is here to make it official. The page declares: "Kneel before your Queen!" with buttons for "Yes, my Queen!" and "Yeah right!"</p>
<p>The "Yeah right!" button commits digital treason and is dealt with accordingly. It flees the royal presence, teleporting away from the cursor like a subject who knows they've overstepped. The "Yes, my Queen!" button ascends to occupy the throne — which is to say, the entire screen.</p>
<p>This prank is the perfect counterpart to "Call Me Boss," offering a more regal flavor of demanded respect. It's particularly popular in female friend groups, where the "Queen" dynamic is already a familiar social script. The prank gives it a digital ritual to match the existing social one.</p>
<p>The royal aesthetic lends itself to drama and flair. Send this when you've just accomplished something impressive, won an argument, or simply feel like being treated like royalty for a few minutes. You've earned it — or at least, the fleeing button will make sure you get it anyway.</p>
<p>Duration: 25-40 seconds of royal button pursuit, culminating in a majestic "Long live the Queen!" success screen.</p>`
    },
    zh: {
      title: "叫女王版",
      desc: "确立你的女王地位，不叫按钮识趣地（通过逃跑）自行退下。",
      tags: ["女王", "霸气", "排面"],
      body: `<p>每个朋友圈子都有一个配得上王冠的人。"叫女王"整蛊就是来把它正式化的。页面宣布："快，叫我女王大人！"按钮是"遵命女王大人！"和"想得美！"</p>
<p>"想得美！"按钮犯下了数字叛国罪并受到了相应处置。它逃离女王的存在，像知道自己越界了的臣子一样从光标旁瞬移走。"遵命女王大人！"按钮则登基占据了王位——也就是整个屏幕。</p>
<p>这个整蛊是"喊我大哥"的完美对偶，提供了一种更有皇家风范的索取尊重方式。它在女性朋友圈子中特别受欢迎，"女王"的社交角色本来就是一个熟悉的日常剧本。这个整蛊为现有的社交仪式匹配了一个数字化的典礼。</p>
<p>皇家美学天然适合于戏剧化和排场。当你刚做了一件了不起的事情、赢了一场争论、或者单纯想被当女王供着几分钟的时候，发这个整蛊。你配得上——至少，逃跑按钮会确保你无论如何都能得到。</p>
<p>时长：25-40秒的皇家追按钮之旅，以一句庄严的"女王万岁！"成功弹窗封顶。</p>`
    }
  },
  {
    slug: "kneel-down", emoji: "🧎", category: "power",
    en: {
      title: "Kneel Before Me",
      desc: "Ultimate dominance prank. The 'No' button literally prostrates itself off screen.",
      tags: ["Kneel", "Dominance", "Extreme"],
      body: `<p>The "Kneel Before Me" prank is not for the faint of heart. It's the nuclear option of the power-play category — maximum dominance, minimum dignity for the target. The page demands: "Kneel down and admit I'm the best!" with buttons for "I kneel! You're the best!" and "Never!"</p>
<p>The "Never!" button puts up a fight worthy of a final boss battle. It goes through multiple phases of evasion — teleportation, cursor fleeing, random relocation, and finally, complete off-screen exile. The kneel button rises to full-screen prominence like a digital deity demanding tribute.</p>
<p>This prank is the climax of any power-struggle narrative among friends. Use it as the final move in an escalating prank war, the ultimate "I win" button. The sheer absurdity of the demand — literally kneeling — makes it clear this is peak comedy, not actual bullying.</p>
<p>Reserve this for your closest friends who understand the joke. The prank walks right up to the line of "too much" and winks. The key is the exaggerated nature of the request — nobody would actually expect someone to kneel, which is exactly what makes the digital version so funny.</p>
<p>Duration: 30-50 seconds of epic button warfare. The success screen's "You may rise" is the perfect punchline to this over-the-top power fantasy.</p>`
    },
    zh: {
      title: "跪下认错版",
      desc: "终极支配整蛊，不跪按钮直接把自己跪出屏幕外面。",
      tags: ["跪下", "支配", "终极"],
      body: `<p>"跪下认错"整蛊不适合心态脆弱的人。它是权力游戏类别中的核选项——最大支配力，最低目标尊严。页面命令道："跪下！认我当最强！"按钮是"我跪！你最牛！"和"休想！"</p>
<p>"休想！"按钮展开了配得上最终Boss战的抵抗。它经历了逃避的多个阶段——瞬移、光标逃离、随机位移、以及最终的彻底屏外流放。跪下按钮则像一尊要求贡品的数字神祇般升到全屏显要位置。</p>
<p>这个整蛊是朋友间任何权力斗争叙事的最高潮。把它作为整蛊战争升级中的最后一招，终极的"我赢了"按钮。这个要求的极端荒诞性——居然让人真的跪下——明确表明这是巅峰喜剧，而非实际的欺负人。</p>
<p>留给最铁的朋友，那些能懂这个笑话的人。这个整蛊直接走到了"过头了"的边缘然后眨了眨眼。关键就在于要求的夸张本质——没有人会真的让人跪下，这正是数字版如此好笑的原因所在。</p>
<p>时长：30-50秒的史诗级按钮战争。成功弹窗写着"平身吧"，是这场过度夸张的权力狂想的完美笑点。</p>`
    }
  },
  {
    slug: "be-my-pet", emoji: "🐶", category: "power",
    en: {
      title: "Be My Pet",
      desc: "The most absurd power play. The 'No' button gets leashed and dragged off screen.",
      tags: ["Pet", "Absurd", "Power"],
      body: `<p>At the far end of the power-play spectrum lies "Be My Pet" — a prank so ridiculous that its very absurdity is the joke. The page asks with a straight face: "From today on, you're my pet. OK?" with options "Woof! I'm your pet!" and "I'm a human being!"</p>
<p>The "I'm a human being!" button makes a valiant stand for human dignity — and loses spectacularly. It scampers around the screen like a startled animal, flees from the cursor like it's being chased, and eventually gets cornered into digital oblivion. The pet button, meanwhile, fills the screen with the quiet confidence of someone who now owns another human.</p>
<p>This prank is so over-the-top that it circles back to being hilarious. The premise is patently absurd — nobody is actually becoming anyone's pet — which means there's zero chance of genuine offense. It's pure, distilled silliness dressed up in the format of a domination prank.</p>
<p>Use this only when you've already exhausted the other power-play pranks and need to escalate to maximum ridiculousness. It's the final form of the "joking dominance" bit, the punchline to end all punchlines. If your friend clicks "Woof!", you've won not just the prank war but friendship itself.</p>
<p>Duration: 25-40 seconds of dignity-versus-determinism button drama. The success screen's "Good boy/girl!" is simultaneously the most condescending and funniest message in the entire toolkit.</p>`
    },
    zh: {
      title: "做我宠物版",
      desc: "最荒诞的权力游戏，不做按钮被拴住拖出屏幕。",
      tags: ["宠物", "荒诞", "霸气"],
      body: `<p>在权力游戏光谱的最远端，矗立着"做我宠物"——一个荒谬到了本身就成为笑点的整蛊。页面一本正经地问道："从今天起你就是我的宠物了，好不好？"按钮是"汪汪！我是你的宠物！"和"我是一个人！"</p>
<p>"我是一个人！"按钮为人类尊严做出了英勇的抵抗——并且输得轰轰烈烈。它像受惊的小动物一样在屏幕上四处乱窜，像被追赶一样逃离光标，最终被逼入数字虚无的角落。而宠物按钮则带着一种"我现在拥有了一个人类"的安静自信填满整个屏幕。</p>
<p>这个整蛊夸张到了极点，反而变得格外好笑。这个前提是赤裸裸的荒诞——没有人会真的变成任何人的宠物——这意味着零真实冒犯的可能。它是纯粹的、蒸馏过的蠢萌，穿着支配整蛊的外衣。</p>
<p>只有在你已经把其他权力游戏整蛊用完、需要升级到最大荒谬度时才使用它。这是"玩笑式支配"梗的终极形态，是所有笑点终结之后的那个笑点。如果你的朋友点击了"汪汪！"，你不仅赢了整蛊战争，还赢了这份友谊本身。</p>
<p>时长：25-40秒的尊严对决定论的按钮大戏。成功弹窗写着"乖狗狗/乖猫咪！"，是整个工具箱中同时最居高临下又最好笑的一条信息。</p>`
    }
  },

  // ═══ MONEY (金钱相关) ═══
  {
    slug: "pocket-money", emoji: "💰", category: "money",
    en: {
      title: "Hand Over Allowance",
      desc: "Make them hand over allowance money. The 'No' button flees on touch.",
      tags: ["Allowance", "Partner", "Prank"],
      body: `<p>Money makes the world go round, and the "Hand Over Allowance" prank makes your friends' money go to you — jokingly, of course. The page requests: "Hand over your allowance money!" with buttons for "Here, take it!" and "Get your own money!"</p>
<p>The "Get your own money!" button represents financial independence — and like financial independence, it's increasingly hard to achieve. The button activates full evasion protocols after the second click, dodging the cursor like a tax evader dodging an audit. The hand-over button grows to represent the only fiscally responsible choice.</p>
<p>This prank has a special place in Chinese internet culture, where "零花钱" (pocket money/allowance) is a common trope in romantic relationships — one partner handing over their spending money to the other. The prank plays with this cultural script in a way that's instantly recognizable and funny.</p>
<p>Works best between couples who already joke about money dynamics, or between close friends. The prank is about the joke of financial submission, not actual financial demands. Nobody should be using this to actually request money — it's a comedy bit, not a fundraising tool.</p>
<p>Duration: 25-35 seconds of financial-themed button evasion. The success screen's "Wise choice!" message adds a note of mock-approval.</p>`
    },
    zh: {
      title: "上交零花钱版",
      desc: "让对象/朋友上交零花钱，不交按钮一碰就跑，上交按钮越来越大。",
      tags: ["零花钱", "对象", "搞怪"],
      body: `<p>金钱让世界运转，"上交零花钱"整蛊让朋友的钱流向你——当然是开玩笑的。页面提出要求："把零花钱交出来！"按钮是"给你给你！"和"自己挣钱去！"</p>
<p>"自己挣钱去！"按钮代表了财务独立——而就像财务独立一样，它越来越难以实现。按钮在第二次点击后启动了全面逃避协议，像逃税者躲避审计一样躲着光标。上交按钮则膨胀为唯一财务上负责任的选择。</p>
<p>这个整蛊在中国互联网文化中有着特殊的地位，"零花钱"是恋爱关系中的常见桥段——一方把零花钱上交给另一方。这个整蛊以一种立即可识别且好笑的方式玩弄了这个文化剧本。</p>
<p>最适合在已经在金钱话题上开玩笑的情侣之间使用，或者是亲密朋友之间。这个整蛊的核心是财务服从的玩笑，而非真实的金钱索求。任何人都不应该用它来真的要钱——它是喜剧节目，不是筹款工具。</p>
<p>时长：25-35秒的财务主题按钮逃避战。成功弹窗写着"算你识相！"，增添了一抹诙谐的"算你懂事"的韵味。</p>`
    }
  },
  {
    slug: "give-red-packet", emoji: "🧧", category: "money",
    en: {
      title: "Send Me a Red Packet",
      desc: "Chinese red packet special. The 'No' button runs from the cursor like it's avoiding a bill.",
      tags: ["Red Packet", "Money", "Chinese"],
      body: `<p>Red packets (红包) are a beloved Chinese tradition, and the "Send Me a Red Packet" prank modernizes it for the digital age. The page asks with festive cheer: "How about sending me a red packet?" with options "Here you go! 🧧" and "Maybe next holiday!"</p>
<p>The "Maybe next holiday!" button scrooges its way across the screen, dodging generosity like it's on a budget. The red packet button blossoms to festive proportions, becoming the only generous option available. The visual cue of the red envelope emoji adds cultural authenticity that Chinese users will appreciate immediately.</p>
<p>This prank has the highest cultural specificity of any in the toolkit. Red packets are deeply embedded in Chinese social practice — given during Spring Festival, weddings, birthdays, and increasingly via digital platforms like WeChat. The prank plays with this tradition in a way that's respectful of the culture while being genuinely funny.</p>
<p>Best deployed during actual red packet seasons — Chinese New Year, Mid-Autumn Festival, or any celebratory occasion. The timing makes the prank feel festive rather than demanding. It's less "give me money" and more "let's celebrate together (with money)."</p>
<p>Duration: 20-30 seconds of generous button pursuit. The success screen's "Thank you for the red packet!" message completes the cultural ritual with digital warmth.</p>`
    },
    zh: {
      title: "发红包版",
      desc: "中国特色红包整蛊，不发按钮像躲避账单一样逃离光标。",
      tags: ["红包", "金钱", "中国特色"],
      body: `<p>红包是深受喜爱的中国传统文化，"发红包"整蛊将其现代化为数字时代的版本。页面带着节日的喜悦问道："给我发个红包呗？"按钮是"给你！🧧"和"下次过节再说！"</p>
<p>"下次过节再说！"按钮像守财奴一样在屏幕上吝啬穿行，像精打细算一样躲避慷慨解囊。红包按钮则绽放出节日的规模，成为唯一可选的慷慨选项。红包emoji的视觉线索增添了中国用户一眼就能领会的文化真实性。</p>
<p>这个整蛊在整个工具箱中具有最高的文化特异性。红包深深嵌入在中国社交实践之中——春节期间、婚礼、生日、且越来越多地通过微信等数字平台发送。这个整蛊以一种尊重文化同时又真正好笑的方式玩味了这个传统。</p>
<p>最佳部署时机是真正的红包季节——春节、中秋节或任何庆祝场合。恰当的时机让这个整蛊感觉喜庆而非索取。它不像"给我钱"，更像"我们一起庆祝吧（用钱的形式）"。</p>
<p>时长：20-30秒的慷慨按钮追逐战。成功弹窗写着"谢谢老板的红包！"，用数字化的温暖完成了这场文化仪式。</p>`
    }
  },
  {
    slug: "lend-money", emoji: "💸", category: "money",
    en: {
      title: "Lend Me Money",
      desc: "Borrow money with a smile. The 'No' button flees like it's dodging a debt collector.",
      tags: ["Loan", "Money", "Borrow"],
      body: `<p>Asking to borrow money is awkward. The "Lend Me Money" prank makes it awkward in the funniest possible way. The page pleads: "Can you lend me some money? I'll pay you back!" with buttons for "Sure, how much?" and "I'm broke too!"</p>
<p>The "I'm broke too!" button pleads poverty while actively running from the conversation. It darts around the screen like someone dodging a loan shark, eventually disappearing into financial hiding. The lending button grows more generous by the second, representing the path of fiscal friendship.</p>
<p>This prank cleverly subverts the genuine awkwardness of borrowing money by turning it into a joke. If they click "Sure, how much?", you can follow up with a real request or — more likely — reveal it was just a prank. Either way, the ice is broken and the conversation about money has been made less uncomfortable.</p>
<p>Use with extreme care. Money is sensitive, and this prank should only be deployed among friends where financial jokes are already established as fair game. Never use it to actually pressure someone into lending money — that's not a prank, that's manipulation.</p>
<p>Duration: 20-30 seconds. The success screen's "I'll pay you back... maybe" message maintains the joke's self-aware humor right through to the end.</p>`
    },
    zh: {
      title: "借钱给我版",
      desc: "笑着借钱，不借按钮像躲债主一样疯狂逃窜。",
      tags: ["借钱", "金钱", "借贷"],
      body: `<p>开口借钱很尴尬。"借钱给我"整蛊用一种最搞笑的方式使其更加尴尬。页面央求道："借我点钱呗？肯定还！"按钮是"好啊多少？"和"我也穷啊！"</p>
<p>"我也穷啊！"按钮一边乞求贫穷一边主动逃离对话。它像躲避高利贷的人一样在屏幕上四处乱窜，最终躲进财务隐匿处消失不见。借钱按钮则每秒钟变得更加慷慨，代表了财务友谊的正道。</p>
<p>这个整蛊聪明地颠覆了借钱这件事本身的尴尬，把它变成了一个玩笑。如果他们点了"好啊多少？"，你可以跟进一个真实的请求或者——更可能——揭示这只是一个整蛊。无论哪种方式，冰块都已被打破，关于金钱的对话变得不那么让人不适了。</p>
<p>使用时常备加小心。金钱是敏感话题，这个整蛊只应该在那些已经把财务玩笑当作正常互动的朋友之间使用。永远不要用它来真的给人施压借钱——那不是整蛊，那是操控。</p>
<p>时长：20-30秒。成功弹窗写着"我肯定会还的...大概吧"，这个信息把自嘲式幽默一路保持到了最后。</p>`
    }
  },
  {
    slug: "buy-gift", emoji: "🎁", category: "money",
    en: {
      title: "Buy Me a Gift",
      desc: "Get someone to promise you a present. The 'No' button unwraps itself off screen.",
      tags: ["Gift", "Shopping", "Treat"],
      body: `<p>Everyone loves receiving gifts, and the "Buy Me a Gift" prank is the most charming way to fish for one. The page sweetly asks: "Will you buy me a little gift?" with buttons for "Of course! What do you want?" and "Wait for your birthday!"</p>
<p>The "Wait for your birthday!" button practices what it preaches — it waits, then runs. It lingers just long enough to seem clickable, then bolts to the opposite corner like a promise being deferred. The gift button wraps itself in ever-larger packaging until it fills the entire screen with the spirit of giving.</p>
<p>This prank has a sweetness that sets it apart from the other money-category entries. It's not about cash or loans — it's about the thoughtfulness of a gift. The framing is "someone cares enough to pick something out for you," which is inherently warm even when delivered through a prank format.</p>
<p>Ideal for use between significant others, close friends, or family members. The prank says "I want a present" in a way that's endearing rather than demanding. The childlike framing — "a little gift" — makes it clear this is about the gesture, not the monetary value.</p>
<p>Duration: 20-30 seconds of gift-wrapped button pursuit. The success screen's "Surprise me!" message leaves room for the real fun to begin.</p>`
    },
    zh: {
      title: "买礼物版",
      desc: "让人答应给你买礼物，不买按钮把自己拆出屏幕外面。",
      tags: ["礼物", "购物", "请客"],
      body: `<p>每个人都喜欢收到礼物，"买礼物"整蛊是最有魅力的索礼方式。页面甜甜地问道："给我买个小礼物好不好？"按钮是"当然！想要什么？"和"等你过生日的！"</p>
<p>"等你过生日的！"按钮践行了它所说的——它先等，然后逃跑。它逗留的时间刚好让人觉得能点到，然后像被推迟的承诺一样冲向对面角落。礼物按钮则把自己包装得越来越大，直到用送礼精神填满整个屏幕。</p>
<p>这个整蛊有一种区别于其他金钱类条目的甜度。它不是关于现金或借贷——而是关于送礼的那份心意。框架是"有人足够关心你以至于愿意为你挑东西"，即使通过整蛊形式传达也天然带有温度。</p>
<p>最适合在恋人、密友或家人之间使用。这个整蛊以一种讨人喜欢而非索取的方式表达了"我想要个礼物"。孩子气式的框架——"一个小礼物"——清楚地表明重点是心意而非金钱价值。</p>
<p>时长：20-30秒的礼盒包装式按钮追逐战。成功弹窗写着"给我惊喜吧！"，为真正的乐趣留下了开启的空间。</p>`
    }
  },

  // ═══ MORE DAILY & MISC ═══
  {
    slug: "carry-me", emoji: "🐷", category: "daily",
    en: {
      title: "Carry Me",
      desc: "Get a piggyback ride promise. The 'No' button gets tired and collapses off screen.",
      tags: ["Carry", "Lazy", "Silly"],
      body: `<p>"My legs hurt!" — the universal excuse for wanting to be carried. The "Carry Me" prank turns this classic bit of laziness into an interactive experience. The page whines: "Carry me on your back!" with buttons for "Hop on!" and "Walk on your own!"</p>
<p>The "Walk on your own!" button starts strong but gradually loses steam — much like someone who's actually being asked to carry another person. It slows down, its movements become more labored, and eventually it collapses off-screen from sheer exhaustion. The piggyback button grows strong and steady, ready for its passenger.</p>
<p>This prank captures the specific dynamic of close friendships where physical playfulness is normal. It's the digital equivalent of jumping on someone's back unexpectedly — surprising, slightly annoying, but ultimately endearing if you're close enough.</p>
<p>Best used among friends who are already physically comfortable with each other. The prank is deliberately childish, which is exactly what makes it funny. Adults don't typically ask for piggyback rides, so the request itself is inherently absurd and therefore comedic.</p>
<p>Duration: 20-30 seconds. The success screen's "Giddyup!" adds a final touch of playful immaturity.</p>`
    },
    zh: {
      title: "背我版",
      desc: "让人答应背你，不背按钮累垮在屏幕外面。",
      tags: ["背", "偷懒", "搞笑"],
      body: `<p>"我腿疼！"——这是想让人背的万能借口。"背我"整蛊把这种经典的懒人行为变成了一场互动体验。页面撒娇道："背我！"按钮是"上来吧！"和"自己走！"</p>
<p>"自己走！"按钮起初状态饱满但逐渐失去动力——就像一个真的被要求背别人的人那样。它慢下来，动作越来越吃力，最终因为纯粹的疲惫而瘫倒在屏幕之外。背人按钮则长得又大又稳，准备好迎接乘客。</p>
<p>这个整蛊捕捉了亲密友谊中肢体玩乐正常的特定社交动态。它是突然跳到某人背上的数字等价物——令人意外、有点烦人、但如果你们够亲近的话终究是讨人喜欢的。</p>
<p>最适合在那些已经对彼此身体上舒适的熟人之间使用。这个整蛊刻意幼稚，而这正是它的好笑之处。成年人通常不会要求被背，所以这个请求本身天然荒诞，因此具有喜剧效果。</p>
<p>时长：20-30秒。成功弹窗写着"驾！"，为这一整段调皮的幼稚行为添上了最后的一笔。</p>`
    }
  },
  {
    slug: "massage-me", emoji: "💆", category: "daily",
    en: {
      title: "Give Me a Massage",
      desc: "Get a massage promise. The 'No' button is too tense and seizes up off screen.",
      tags: ["Massage", "Relax", "Self-care"],
      body: `<p>After a long day, nothing sounds better than a massage. The "Give Me a Massage" prank is your digital masseuse — it doesn't actually massage you, but it does find someone who might. The page asks: "Can you give me a massage? My shoulders are killing me!" with options "Lie down, I got you" and "Massage yourself!"</p>
<p>The "Massage yourself!" button is as tense as the shoulders it's refusing to rub. It moves stiffly at first, then with increasing jerkiness, and eventually seizes up entirely — frozen in a digital muscle spasm of unhelpfulness. The massage button loosens up and expands, promising relief.</p>
<p>This prank has a universality that makes it work across all relationship types. Everyone understands the desire for a massage, and everyone understands the reluctance to give one. The prank plays these two universal truths against each other for comedic effect.</p>
<p>Send it to your partner, roommate, or that friend who's always bragging about their massage skills. Time it for the evening when people are winding down and more receptive to the idea of relaxation. The prank plants the seed — even if they click "Massage yourself!", the idea has been suggested.</p>
<p>Duration: 20-30 seconds. The success screen's "Ahh, that's the spot!" provides vicarious satisfaction.</p>`
    },
    zh: {
      title: "给我按摩版",
      desc: "让人答应给你按摩，不按按钮全身僵硬卡死在屏幕外。",
      tags: ["按摩", "放松", "养生"],
      body: `<p>漫长的一天过后，没有什么比一次按摩更令人向往了。"给我按摩"整蛊就是你的数字按摩师——它不会真的按你，但确实能帮你找到可以按你的人。页面问道："给我按按呗？肩膀酸死了！"按钮是"趴好，我来"和"自己按去！"</p>
<p>"自己按去！"按钮和它拒绝按摩的肩膀一样僵硬。它起初动作生硬，然后越来越抽搐，最终彻底卡死——冻结在一种帮不上忙的数字肌肉痉挛之中。按摩按钮则舒展开来并膨胀放大，承诺着缓解。</p>
<p>这个整蛊有一种普适性，使其在所有关系类型中都能奏效。每个人都理解对按摩的渴望，每个人也都理解给人按摩的不情愿。这个整蛊让这两个普遍的真理相互碰撞以产生喜剧效果。</p>
<p>发给你的伴侣、室友或那个总在吹嘘自己按摩技术好的朋友。把时间安排在傍晚人们开始放松、对放松的提议更加开放的时候。这个整蛊种下了种子——就算他们点了"自己按去！"，这个想法也已经被植入了。</p>
<p>时长：20-30秒。成功弹窗写着"啊～就是那儿！"，提供了替代性的满足感。</p>`
    }
  },
  {
    slug: "do-homework", emoji: "📝", category: "daily",
    en: {
      title: "Do My Homework",
      desc: "The ultimate student prank. The 'No' button fails the test and gets expelled off screen.",
      tags: ["Homework", "School", "Student"],
      body: `<p>Every student has dreamed of outsourcing their homework. The "Do My Homework" prank makes that dream come true — sort of. The page begs: "Can you help me with my homework?" with buttons for "Sure, let me see it" and "Do your own work!"</p>
<p>The "Do your own work!" button is the hall monitor of the digital world — strict, evasive, and ultimately ineffective. It patrols the screen avoiding the cursor like a student avoiding responsibility, but eventually gets cornered and sent to detention (off-screen). The homework help button grows to become the valedictorian of button options.</p>
<p>This prank resonates deeply with students of all ages. The shared experience of homework dread creates instant recognition and humor. It works from middle school all the way through college — the homework may change, but the desire to avoid it remains constant.</p>
<p>Best shared among classmates and study groups. The prank captures the camaraderie of shared academic suffering. Send it to your study buddy when you're both procrastinating — the meta-humor of using a prank to avoid homework while the prank is about avoiding homework creates a beautiful recursive joke.</p>
<p>Duration: 20-30 seconds of academic-themed button warfare. The success screen's "You're a lifesaver!" captures the genuine relief of homework help received.</p>`
    },
    zh: {
      title: "帮我写作业版",
      desc: "终极学生整蛊，不帮按钮考试不及格被屏幕开除。",
      tags: ["作业", "学校", "学生"],
      body: `<p>每个学生都做过把作业外包的梦。"帮我写作业"整蛊让这个梦想成真——某种意义上的。页面央求道："帮我写作业好不好？"按钮是"好啊拿来我看看"和"自己的作业自己写！"</p>
<p>"自己的作业自己写！"按钮是数字世界的纪律委员——严格、逃避、且最终无效。它像逃避责任的学生一样在屏幕上巡逻避开光标，但最终被逼到角落送到了留堂（屏幕之外）。写作业按钮则成长为按钮选项中的优秀毕业生。</p>
<p>这个整蛊深刻引起各年龄段学生的共鸣。对于作业恐惧的共同体验创造了即时的认同感和幽默感。从初中一路适用到大学——作业内容会变，但逃避作业的欲望始终如一。</p>
<p>最适合在同学和学习小组中分享。这个整蛊捕捉了共同承受学业苦难的战友情谊。当你们都在拖延的时候发给你的学习伙伴——用一个关于逃避作业的整蛊来逃避作业，这种元幽默创造了一个美丽的递归笑话。</p>
<p>时长：20-30秒的学业主题按钮战争。成功弹窗写着"救命恩人！"，捕捉了获得作业帮助时的真实解脱感。</p>`
    }
  },

  // ═══ WILD CARD ═══
  {
    slug: "admit-ugly", emoji: "👹", category: "social",
    en: {
      title: "Admit You're Ugly",
      desc: "The most savage roast prank. The 'No' button can't even look at itself and runs away.",
      tags: ["Roast", "Savage", "Close Friends Only"],
      body: `<p>At the extreme end of the friendship-testing spectrum lies "Admit You're Ugly" — a prank that should only be deployed among friends who have ascended beyond the need for self-esteem. The page asks with a smirk: "Deep down, you know you're ugly, right?" with options "OK fine, I'm ugly" and "I'm gorgeous!"</p>
<p>The "I'm gorgeous!" button can't even face itself. It immediately begins fleeing — not just from the cursor, but seemingly from its own reflection. It teleports, dodges, and ultimately vanishes in a puff of digital vanity. The admission button grows to mirror-sized proportions, ready for the moment of truth.</p>
<p>This prank operates on the "so mean it's funny" principle. The insult is so direct and absurd that it bypasses actual offense and lands in the territory of pure comedy. The key is the exaggerated framing — the prank page is so obviously a joke that the content can't be taken seriously.</p>
<p>Only use this with friends who already engage in mutual roasting. If your friendship doesn't already include "you're ugly" as a standard joke format, choose literally any other prank. This is the final boss of friendship tests — not for acquaintances, coworkers, or anyone whose sense of humor you're unsure about.</p>
<p>Duration: 20-30 seconds of savage button pursuit. The success screen's "At least you're honest" is the most backhanded compliment possible, which is exactly the point.</p>`
    },
    zh: {
      title: "承认你丑版",
      desc: "最狠的损友整蛊，不承认按钮连自己都看不下去直接逃跑。",
      tags: ["损人", "狠活", "仅限死党"],
      body: `<p>在友谊考验光谱的最远端，矗立着"承认你丑"——一个只应在那些已经超越了自尊需求的朋友之间使用的整蛊。页面坏笑着问道："你心里清楚你长得不好看对吧？"按钮是"好吧我丑我认了"和"我明明很好看！"</p>
<p>"我明明很好看！"按钮连自己都看不下去。它立即开始逃跑——不仅逃离光标，更像是逃离自己的倒影。它瞬移、闪躲、最终在一阵数字化的虚荣迷雾中消失殆尽。承认按钮则膨胀到镜面大小，准备好迎接真相的时刻。</p>
<p>这个整蛊基于"损到极致自然萌"的原理运作。这个侮辱如此直接和荒诞，以至于它绕过了真正的冒犯，直接降落在纯粹喜剧的领地。关键在于夸张的框架——这个整蛊页面显然是个玩笑，内容无法被当真。</p>
<p>只跟那些已经有互相损来损去传统的朋友使用。如果你的友谊中还没有包含"你好丑"这样的标准玩笑形式，请直接选择工具箱里的任何其他整蛊。这是友谊考验的终极Boss——不适用于熟人、同事或任何你不太确定幽默风格的人。</p>
<p>时长：20-30秒的狠人按钮追逐战。成功弹窗写着"至少你很诚实"，是有史以来最阴阳怪气的"赞美"，而这也正是它的精髓所在。</p>`
    }
  },
];
