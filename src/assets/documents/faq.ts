import IArticles from "../../interfaces/IArticle";

const faq: IArticles = [
  {
    header: `Frequently Asked Questions - Account and Login Issues`,
    subheader: `I have a payment issue with Patreon! What do I do?`,
    paragraph: `Please <strong>directly</strong> send a message to <span class='text-(--mrs-tango-color)'>@MrsTango</span>, the mods cannot assist in Patreon related issues.`,
  },
  {
    header: ``,
    subheader: `How do I know I have the right roles?`,
    paragraph: `You can view your roles in Discord by clicking on your name. You should have the same role for the Patron tier you chose when signing up with Patreon. The bot automatically sets up roles so long as your Discord and Patreon are linked. Some channels will show with locks; this indicates they have permissions, not that you cannot interact in that space.`,
  },
  {
    header: `Frequently Asked Questions - Titancraft`,
    subheader: `Does Tango stream on the server?`,
    paragraph: `Tango is a very busy hermit but does sometimes come online for special events. Unfortunately, playing on two servers at once is overwhelming, but he likes to come online to surprise us and see what shenanigans we are up to. There is never a set time for a surprise visit, but any scheduled Tango-centric events will be posted in #server-announcements on Discord.`,
  },
  {
    header: ``,
    subheader: `Can I stream/record on the server?`,
    paragraph: `Sure, just do not show the IP on stream and do not show off anyone’s builds without their prior approval. Public areas like the SD are okay to stream/record, but please make sure games in the ED are open and available to play before streaming them. You can also turn on the [Streaming]-Tag by typing /stream-on in game chat to let others know you are streaming. (/stream-off to turn it off when you are finished!) <br/>
    There's also a [Recording]-Tag by typing /record-on in game chat to let others know you are recording. (/record-off to turn it off when you are finished!) <br/>
    If you are recording and want to be in a public voice chat, please use the Livestream-Voice channel. Do not record people without their prior consent.`,
  },
  {
    header: `Frequently Asked Questions - Twitch`,
    subheader: `Someone asked something in chat, and I know the answer, can I tell them?`,
    paragraph: `If the answer isn’t a wall of text, you are more than welcome to answer their question. Please keep in mind to respect everyone in chat.`,
  },
  {
    header: ``,
    subheader: `I saw someone breaking the rules! How do I report it?`,
    paragraph: `Please do not mini-mod. You are more than welcome to let the mods know, and they will handle it. <br/>
    All, if not the majority of TC mods are also Twitch mods, although, <strong>DeadNight_4</strong> and <strong>OhTheNoises</strong> are dedicated Twitch mods in Tango's streams that are almost always in chat, available for you.
    `,
  },
];

export default faq;
