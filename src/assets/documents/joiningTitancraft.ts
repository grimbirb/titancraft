import Container from "../../components/hooks/Container";
import Heading from "../../components/hooks/Heading";
import Image from "../../components/hooks/Image";
import Link from "../../components/hooks/Link";
import Paragraph from "../../components/hooks/Paragraph";
import PatreonButton from "../../components/PatreonButton";

const joiningTC: string[] = [
  Container(
    "column",
    "full",
    5,
    Paragraph(
      `Want to join an incredible, talented and welcoming community? We're happy to explain the joining process of the Titancraft server!`,
      "full",
      "bold",
      "center"
    ),

    Container(
      "column",
      "full",
      0,
      Heading(`Supporting TangoTek on Patreon`, 2, "bold", "left"),
      Paragraph(
        `Titancraft is a Patreon exclusive server, to join the community you will need to support TangoTek via Patreon with the <strong>$10 tier</strong> or higher.`
      ),
      Paragraph(
        `If you wish to support Tango and not necessarily join the community, you're free to support him at any Patreon tier you wish!`
      ),
      // Custom made button for joining Patreon
      PatreonButton()
    ),

    // HTML List, might convert to a fully editable component at a later date
    Container(
      "row",
      "full",
      2,
      Container(
        "column",
        "full",
        0,
        Heading(`Linking Patreon to Discord`, 2, "bold", "left")
          .concat(`<ol class='list-decimal list-inside'>
            <li>Log in to your Patreon account.</li>
            <li>Click on <strong>Settings</strong> from the left side menu.</li>
            <li>Click on <strong>More</strong> and then <strong>Connected Apps</strong> from the menu bar.</li>
            <li>Click on <strong>Discord</strong> and then click the <strong>Connect</strong> button.</li>
            <li>Enter the email address or phone number you use to log in with Discord and your password and click the <strong>Login</strong> button.</li>
            <li>Click the <strong>Authorize</strong> button.</li>
            <li>You've successfully linked Discord to Patreon! You may need to refresh the page.</li>
          </ol>`)
      ),
      Image(
        `images/joining_tc/linking_discord.png`,
        "Linking Discord example",
        "8/12"
      )
    ),

    Container(
      "column",
      "full",
      2,
      Heading(`Linking Your Minecraft Account`, 2, "bold", "left"),
      Paragraph(
        `To link your Minecraft account, go to ${Link(
          "https://minecraftauth.me",
          "https://minecraftauth.me",
          true
        )}, and click the Login with Microsoft button.`,
        "full",
        "normal"
      ),
      Paragraph(
        `Note: You may only have one account linked at a time. If you wish to use a different account you must unlink the other Minecraft account and then login with your new account and link it.`
      ),
      Paragraph(
        `Use the buttons at the bottom of the page to hook in your Discord and Patreon accounts using the same methods.`
      ),
      Image(
        `images/joining_tc/linking_minecraft_1.png`,
        `Linking Minecraft Process`,
        "6/12"
      ),
      Container(
        "column",
        "full",
        2,
        Paragraph(
          `When linking your Minecraft account, please make sure you have the correct email adress. If the email address is wrong, you can sign out at the bottom-right of the screen. Sign into the right account before attempting to connect again.`
        ),
        Paragraph(
          `In some instances you need to be logged into your xbox live account that's linked to your minecraft account before clicking the <strong>Login with Microsoft</strong> button in minecraftauth.me.`
        )
      ),
      Image(
        "images/joining_tc/linking_minecraft_2.png",
        "Linking Minecraft Process",
        "3/12"
      )
    ),
    Container(
      "column",
      "full",
      2,
      Heading(`Server Verification`, 2, "bold", "left"),
      Paragraph(
        `The first time you log into the server, you will be stuck in spawn until your Discord and Minecraft have been linked.  You can verify whether or not you are linked by looking for the <strong>Linked</strong> role in Discord.`
      ),
      Paragraph(
        `If you do not have this role, type <strong>/discord link</strong> into the chat window of Minecraft. This will generate a code. Private message the code to <strong>@RustyBot</strong> in Discord and your color will be updated, after you relog you can then leave spawn. You can message RustyBot by finding his profile in the member list on the right side of your discord screen, right-clicking his name and clicking <strong>Message</strong>.`
      ),
      Paragraph(
        `If you see the <strong>Linked</strong> role in Discord and are still unable to leave Spawn, and/or if @RustyBot says you're currently already linked to Discord, please contact a member of staff via the <strong>#⁠ask-a-mod</strong> channel on Discord.`
      )
    ),
    Paragraph(`Welcome to Titancraft! :)`, "full", "bold", "center")
  ),
];

export default joiningTC;
