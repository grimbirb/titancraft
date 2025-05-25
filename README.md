
# Titancraft

 © GrimBirb, get permission before use.

## Authors

- [@grimbirb](https://www.github.com/grimbirb)


## Table Of Content

* [Table Of Content](#table-of-content)
    * [Using The Page Builder Framework](#using-the-page-builder-framework)
        * [Containers](#containers)
        * [Heading](#heading)
        * [Paragraph](#paragraph)
        * [Image](#image)
        * [Link](#link)
## Using The Page Builder Framework

This project includes a custom-built framework designed to let editors build custom pages fluidly and freely—without interfering with the core website logic.  

For questions, suggestions, or feedback about the framework, please reach out directly to **GrimBirb**.  

> [!IMPORTANT]
> Modifying the framework or core website code without permission is a breach of the collaboration agreement and may cause critical functionality to break.  
> **Do not edit any code you are not explicitly authorized to change.**  

### Containers  
`Containers` are fundamental to structuring your layout. They allow you to group, align, and organize elements while keeping the design clean, responsive, and manageable.  

Ensure the function is imported when needed.  

**Syntax**  
```ts
Container(direction, width, spacing, content),
```  

> *direction `<string literal>`* - Determines the layout direction of the container.  
> Options include:    
>> row - Lays out child elements horizontally, from left to right.  
>> column - Lays out child elements vertically, from top to bottom.  
>> row-reverse - Lays out child elements horizontally, but in reverse order (right to left).  
>> column-reverse - Lays out child elements vertically, but in reverse order (bottom to top).  

> *width `<string literal>`* - Defines the width the container will occupy within its parent, based on a 12-column grid system. This system divides the parent into 12 equal parts, so setting `width` to `"6/12"` would make the container take up 50% of its parent’s width. 

> *spacing `<number>`* - Sets the spacing between child elements inside the container. The value must be a whole number starting at `0`. A higher number means more space between the elements. 

> *content `<string array>`* - An array of items or functions to be inserted inside the container. You can include references to framework-specific functions or strings. Any arguments after the `spacing` parameter, separated by commas, will be treated as content. 

*Examples*
```ts
Container("row", "6/12", 0, Paragraph("Hello world!")),
```
![Container Example](https://github.com/user-attachments/assets/6a0624f5-fe5b-4cbc-9d29-8f125be69eb0)

```ts
Container("column", "full", 2, Paragraph("Hello"), "World!"),
```
![Container Example](https://github.com/user-attachments/assets/dbe5add2-8c4c-4bc8-8892-4c1afdd1c38e)


```ts
Container("row", "full", 5, Paragraph("I will be"), Paragraph("ordered in a row"), Paragraph("with a large gap!")),
```  
![Container Example](https://github.com/user-attachments/assets/f2590926-8afa-42d2-ba3e-85e7af22c005)


```ts
Container("column-reverse", "full", 5, Paragraph("I will be"), Paragraph("ordered in a column-reverse"), Paragraph("with a large gap!")),
```
![Container Example](https://github.com/user-attachments/assets/f4d9caad-9378-4e5d-b12c-783a6e2d6121)


> [!TIP]
> It is recommended to wrap the entire content of the page in a Container, and other categories into their own Containers to better control the gaps and spacing between the elements.

### Heading  
The `Heading` function creates a customizable title or subtitle.  

Ensure the function is imported when needed.  

**Syntax**
```ts
Heading(string, type, font, align, decoration, width),
```  

> *string `<string>`* -  The header text to display.  

> *type `<number literal>`* - The header level from 2 to 4. Higher numbers represent smaller subtitles.    
> Default: `2`.  

> *font `<string literal>`* - Sets the font weight (e.g., `"bold"`, `"light"`).  
> Default: `"bold"`.  

> *align `<string literal>`* - Aligns the header (`"left"`, `"center"`, `"right"`).  
> Default: `"center"`.  

> *decoration `<string literal>`* - Determines if the heading should have an underline.  
> Default: `"none"`.  

> *width `<string literal>`* - Defines the width the header will occupy within its parent, based on a 12-column grid system. This system divides the parent into 12 equal parts, so setting `width` to `"6/12"` would make the header take up 50% of its parent’s width.  
> Default: `"full"`.  

*Examples*  
```ts
Heading("Testing a header #2", 2, "bold", "center", "underline"),
```  
![Heading Example](https://github.com/user-attachments/assets/bc03ec02-2cab-49ec-b84d-a87e58aa59b7)

```ts
Heading("Testing a header #3", 3, "light", "right", "underline"),
```  
![Heading Example](https://github.com/user-attachments/assets/415c029c-d322-4508-a385-d71659936a6f)

```ts
Heading("Testing a header #4", 4, "semibold", "left"),
```  
![Heading Example](https://github.com/user-attachments/assets/ce3ce770-eb32-475a-9060-c2199fa16c1a)

### Paragraph  
The `Paragraph` function adds a block of text to the layout.  

Ensure the function is imported when needed.  

**Syntax**  
```ts
Paragraph(string, width, font, align),
```  

> *string `<string>`* -  The paragraph text.  

> *width `<string literal>`* - Defines the width the paragraph will occupy within its parent, based on a 12-column grid system. This system divides the parent into 12 equal parts, so setting `width` to `"6/12"` would make the paragraph take up 50% of its parent’s width.  
> Default: `"full"`

> *font `<string literal>`* - Font weight of the paragraph.  
> Default: `"normal"`.  

> *align `<string literal>`* - Determines how the paragraph would be aligned.  
> Default: `"left"`.  

*Examples*  
```ts
Paragraph("Hello world!"),
```  
![Paragraph Example](https://github.com/user-attachments/assets/ad315837-1fb6-45b0-bc7a-4f31ff9a9f0a)

```ts
Paragraph("Hello world!", "11/12", "light", "center"),
```  
![Paragraph Example](https://github.com/user-attachments/assets/71675ced-b156-4fce-bf1c-1c41e9139252)

### Image  
The `Image` function inserts an image into the layout.  

Ensure the function is imported when needed.  

**Syntax**
```ts
Image(directory, altText, width, alignment),
```  

> *directory `<string>`* - File path to the image in the repository, or an external path (URL).  

> *altText `<string>`* - Descriptive text for screen readers or if the image fails to load.  

> *width `<string literal>`* - Defines the width the image will occupy within its parent, based on a 12-column grid system. This system divides the parent into 12 equal parts, so setting `width` to `"6/12"` would make the image take up 50% of its parent’s width.  
> Default: `"6/12"`  

> *alignment `<string literal>`* - Determines how the image would be aligned.  
> Default: `"center"`.  

*Example*  
```ts
Image("/images/image.jpg", "test image", "6/12", "right"),
```

### Link  
The `Link` function creates a hyperlink to an **external** or **internal** URL.  

Ensure the function is imported when needed.  

**Syntax**  
```ts
Link(text, url, newTab, linkColor),
```  

> *text `<string>`* -  The link label to display.  

> *url `<string>`* - The destination URL.  

> *newTab `<boolean>`* - Whether to open the link in a new tab.  
> Default: `false`.  

> *linkColor `<boolean>`* - If `true`, applies the default red link color; if `false`, inherits the surrounding color.  
> Default: `true`.  

*Example*  
```ts
Link("Test Link - New Tab", "https://www.google.com/", true),
```  
![Link Example](https://github.com/user-attachments/assets/a4f478b8-cd91-494a-b632-03cd5f6af42f)

