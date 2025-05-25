import Container from "../../components/hooks/Container";
import Heading from "../../components/hooks/Heading";
import Image from "../../components/hooks/Image";
import Link from "../../components/hooks/Link";
import Paragraph from "../../components/hooks/Paragraph";
import event from "../../enums/EEvent";

const eventActive: boolean = true;

const currentEvent: event = event.summer;

const eventDetails: string[] = [
  Heading("Testing a header #2", 2, "bold", "center", "underline"),

  Paragraph("I am just a paragraph!", "3/12"),
  Image("images/s9-end-tour.jpg", "test image", "6/12", "right"),
  Container(
    "row",
    "full",
    2,
    Heading("hi!", 2, "medium", "center", "none", "6/12"),
    Container(
      "row",
      "6/12",
      3,
      Paragraph("Text in a Container... In a Container!", "4/12"),
      Link("Test Link", "https://www.youtube.com/@grimbirb")
    )
  ),
  Link("Test Link - New Tab", "https://www.youtube.com/@grimbirb", true),
  Container("row", "6/12", 0, Paragraph("Hello world!")),
  Container("column", "full", 2, Paragraph("Hello"), "World!"),
  Container(
    "row",
    "full",
    5,
    Paragraph("I will be"),
    Paragraph("ordered in a row"),
    Paragraph("with a large gap!")
  ),
  Container(
    "column-reverse",
    "full",
    5,
    Paragraph("I will be"),
    Paragraph("ordered in a column-reverse"),
    Paragraph("with a large gap!")
  ),
  Paragraph("Hello world!"),
  Paragraph("Hello world!", "11/12", "light", "center"),
];

export { eventActive, currentEvent, eventDetails };
