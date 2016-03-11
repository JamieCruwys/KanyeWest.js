var quotes =
[
    "That that don't kill me, can only make me stronger.",
    "When you're the absolute best, you get hated on the most.",
    "One of my biggest achilles heels has been my ego. And if I, Kanye West, can remove my ego, I think there's hope for everyone.",
    "So, the voices in my head told me go, and then I just walked up, like, halfway up the stage... But I just didn't really want to take away from Beck's moment, or the time he's having to talk. It was kind of a joke – like the Grammys themselves",
    "My greatest pain in life is that I will never be able to see myself perform live.",
    "I think what Kanye West is going to mean is something similar to what Steve Jobs means. I am undoubtedly, you know, Steve of internet, downtown, fashion, culture. Period. By a long jump. I honestly feel that because Steve has passed, you know, it's like when Biggie passed and Jay Z was allowed to become Jay Z",
    "'I hate when I'm on a flight and I wake up with a water bottle next to me like oh great now I gotta be responsible for this water bottle",
    "One of the problems with being a bubbling source of creativity - it's like I'm bubbling in a laboratory, and if you don't put a cap on it, at one point it will, like, break the glass. If I can hone that… then I have, like, nuclear power, like a superhero, like Cyclops when he puts his glasses on.",
    "You should only believe about 90 percent of what I say. As a matter of fact, don't even believe anything that I'm saying at all. I could be completely fucking with you, and the world, the entire time.",
    "I don't even listen to rap. My apartment is too nice to listen to rap in.",
    "There's nothing I really wanted to do in life that I wasn't able to get good at. That's my skill. I'm not really specifically talented at anything except for the ability to learn. That's what I do. That's what I'm here for.",
    "I feel like I'm too busy writing history to read it.",
    "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.",
    "I am the number one human being in music. That means any person that's living or breathing is number two.",
    "Oh my God, I'm one of the greatest rappers in the world",
    "The Bible had 20, 30, 40, 50 characters in it. You don't think that I would be one of the characters of today's modern Bible?",
    "I'm the closest that hip-hop is getting to God. In some situations I'm like a ghetto Pope.",
    "Love your haters - they're your biggest fans",
    "Sometimes when I see a bad performance and people still clap... I wonder if they're clapping because they liked what they saw or because they're happy it's over?",
    "I've known my mom since I was zero years old. She is quite dope.",
    "I'm so gifted at findin' what I don't like the most",
];

function kayneSays()
{
    var randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}
