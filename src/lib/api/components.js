export const components = [
  {
    category: "Layout",
    title: "Aspect Ratio",
    description:
      "AspectRatio component is used to embed responsive videos and maps, etc.",
    examples: [
      {
        title: "Embed Video",
        description:
          "To embed a video with a specific aspect ratio, use an iframe with src pointing to the link of the video.",
        markup: `
<div class="aspect-ratio ratio-1-1 w8">
  <iframe src="https://www.youtube.com/embed/b6L40CEYVyM?controls=0" allowfullscreen></iframe>
</div>`,
      },
      {
        title: "Embed Image",
        description:
          "Here's how to embed an image that has a 4 by 3 aspect ratio.",
        markup: `
<div class="aspect-ratio ratio-4-3 w8">
  <img alt="Generative placeholder" src="https://generative-placeholders.glitch.me/image?width=800&height=800" class="image object-cover">
</div>`,
      },
      {
        title: "Embed Map",
        description:
          "Here's how to embed a responsive Google map using AspectRatio.",
        markup: `
<div class="aspect-ratio ratio-16-9 w8">
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d938513.653639834!2d-116.87784363386679!3d37.31605711351219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80b81baaba3e8c81%3A0x970427e38e6237ae!2sArea%2051%2C%20NV%2C%20USA!5e0!3m2!1sen!2sng!4v1678252368820!5m2!1sen!2sng"></iframe>
</div>`,
      },
    ],
  },
  {
    category: "Layout",
    title: "Box",
    description:
      "Box is the most abstract component on top of which all other Elevon components are built. By default, it renders a `div` element",
  },
  {
    category: "Layout",
    title: "Center",
    description:
      "Center is a layout component that centers its child within itself.",
  },
  {
    category: "Layout",
    title: "Container",
    description:
      "Containers are used to constrain a content's width to the current breakpoint, while keeping it fluid.",
  },
  {
    category: "Layout",
    title: "Flex",
    description:
      "Flex is Box with display set to flex and comes with helpful style shorthand. It renders a `div` element.",
  },
  {
    category: "Layout",
    title: "Grid",
    description: "Grid is a layout for managing grid layouts.",
  },
  {
    category: "Layout",
    title: "Simple Grid",
    description:
      "Simple Grid provides a friendly interface to create responsive grid layouts with ease.",
  },
  {
    category: "Layout",
    title: "Stack",
    description:
      "Stack is a layout component used to group elements together and apply a space between them.",
  },
  {
    category: "Layout",
    title: "Wrap",
    description:
      "Wrap is a layout component used to add space between elements and wraps automatically if there isn't enough space.",
  },
  {
    category: "Forms",
    title: "Button",
    description:
      "Button component is used to trigger an action or event, such as submitting a form, opening a Dialog, canceling an action, or performing a delete operation.",
  },
  {
    category: "Forms",
    title: "Checkbox",
    description:
      "Checkbox component is used in forms when a user needs to select multiple values from several options.",
  },
  {
    category: "Forms",
    title: "Editable",
    description:
      "EditableText is used for inline renaming of some text. It appears as normal UI text but transforms into a text input field when the user clicks or focuses on it.",
  },
  {
    category: "Forms",
    title: "Form Control",
    description:
      "Form Control provides context such as `isInvalid`, `isDisabled`, and `isRequired` to form elements.",
  },
  {
    category: "Forms",
    title: "Icon Button",
    description: "Icon button renders an icon within in a button.",
  },
  {
    category: "Forms",
    title: "Input",
    description:
      "Input component is a component that is used to get user input in a text field.",
  },
  {
    category: "Forms",
    title: "Number Input",
    description:
      "The Number Input component is similar to the Input component, but it has controls for incrementing or decrementing numeric values.",
  },
  {
    category: "Forms",
    title: "Pin Input",
    description:
      "The Pin Input component is similar to the Input component, but is optimized for entering sequences of digits quickly.",
  },
  {
    category: "Forms",
    title: "Radio",
    description:
      "Radios are used when only one choice may be selected in a series of options.",
  },
  {
    category: "Forms",
    title: "Range Slider",
    description:
      "The Range Slider is a multi thumb slider used to select a range of related values.",
  },
  {
    category: "Forms",
    title: "Select",
    description:
      "Select component is a component that allows users pick a value from predefined options.",
  },
  {
    category: "Forms",
    title: "Slider",
    description:
      "The Slider is used to allow users to make selections from a range of values.",
  },
  {
    category: "Forms",
    title: "Switch",
    description:
      "The Switch component is used as an alternative for the checkbox component.",
  },
  {
    category: "Forms",
    title: "Textarea",
    description:
      "The Textarea component allows you to easily create multi-line text inputs.",
  },
  {
    category: "Data Display",
    title: "Badge",
    description:
      "Badges are used to highlight an item's status for quick recognition.",
  },
  {
    category: "Data Display",
    title: "Card",
    description:
      "Card is a flexible component used to group and display content in a clear and concise format.",
  },
  {
    category: "Data Display",
    title: "Code",
    description:
      "Code is a component used to display inline code. It is composed from the Box component with a font family of `mono` for displaying code.",
  },
  {
    category: "Data Display",
    title: "Divider",
    description:
      "Dividers are used to visually separate content in a list or group.",
  },
  {
    category: "Data Display",
    title: "Kbd",
    description:
      "The keyboard key component exists to show which key or combination of keys performs a given action.",
  },
  {
    category: "Data Display",
    title: "List",
    description:
      "List is used to display list items. It renders a <ul> element by default.",
  },
  {
    category: "Data Display",
    title: "Stat",
    description:
      "As the name implies, the `Stat` component is used to display some statistics.",
  },
  {
    category: "Data Display",
    title: "Table",
    description:
      "Table component is used to organize and display data efficiently. It renders a `<table>` element by default.",
  },
  {
    category: "Data Display",
    title: "Tag",
    description:
      "Tag component is used for items that need to be labeled, categorized, or organized using keywords that describe them.",
  },
  {
    category: "Feedback",
    title: "Alert",
    description:
      "Alerts are used to communicate a state that affects a system, feature or page.",
  },
  {
    category: "Feedback",
    title: "Circular Progress",
    description:
      "Circular Progress is used to indicates the progress for determinate and indeterminate processes.",
  },
  {
    category: "Feedback",
    title: "Progress",
    description:
      "Progress is used to display the progress status for a task that takes a long time or consists of several steps.",
  },
  {
    category: "Feedback",
    title: "Skeleton",
    description:
      "Skeleton is used to display the loading state of some component.",
  },
  {
    category: "Feedback",
    title: "Spinner",
    description:
      "Spinners provide a visual cue that an action is processing awaiting a course of change or a result.",
  },
  {
    category: "Feedback",
    title: "Toast",
    description:
      "The toast component is used to give feedback to users after an action has taken place.",
  },
  {
    category: "Typography",
    title: "Text",
    description:
      "Text is the used to render text and paragraphs within an interface.",
  },
  {
    category: "Typography",
    title: "Heading",
    description: "Heading is used to render semantic HTML heading elements.",
  },
  {
    category: "Typography",
    title: "Highlight",
    description: "Highlight allows you to highlight substrings of a text.",
  },
  {
    category: "Overlay",
    title: "Alert Dialog",
    description:
      "Alert Dialog component is used to interrupt the user with a mandatory confirmation or action.",
  },
  {
    category: "Overlay",
    title: "Drawer",
    description:
      "The Drawer component is a panel that slides out from the edge of the screen. It can be useful when you need users to complete a task or view some details without leaving the current page.",
  },
  {
    category: "Overlay",
    title: "Menu",
    description:
      "An accessible dropdown menu for the common dropdown menu button design pattern. Menu uses roving tabIndex for focus management.",
  },
  {
    category: "Overlay",
    title: "Modal",
    description:
      "A modal is a dialog that focuses the user's attention exclusively on an information via a window that is overlaid on primary content.",
  },
  {
    category: "Overlay",
    title: "Popover",
    description: "Popover is a non-modal dialog that floats around a trigger.",
  },
  {
    category: "Overlay",
    title: "Tooltip",
    description:
      "A tooltip is a brief, informative message that appears when a user interacts with an element.",
  },
  {
    category: "Disclosure",
    title: "Accordion",
    description:
      "Accordions display a list of high-level options that can expand/collapse to reveal more information.",
  },
  {
    category: "Disclosure",
    title: "Tabs",
    description:
      "A component that helps you build accessible tabs, by providing keyboard interactions and ARIA attributes described in the WAI-ARIA Tab Panel Design Pattern.",
  },
  {
    category: "Disclosure",
    title: "Visually Hidden",
    description:
      "Visually Hidden is a common technique used in web accessibility to hide content from the visual client, but keep it readable for screen readers.",
  },
  {
    category: "Navigation",
    title: "Breadcrumb",
    description:
      "Breadcrumbs is a navigation pattern that helps users understand the hierarchy of a website.",
  },
  {
    category: "Navigation",
    title: "Link",
    description: "Link is an accessible element for navigation.",
  },
  {
    category: "Navigation",
    title: "Link Overlay",
    description:
      "Link Overlay is a semantic component used to wrap elements (cards, blog post, articles, etc.) in a link.",
  },
  {
    category: "Navigation",
    title: "Skip Nav",
    description:
      "Skip Nav allows keyboard users to skip to the main content of the page.",
  },
  {
    category: "Media and icons",
    title: "Avatar",
    description:
      "The Avatar component is used to represent user, and displays the profile picture, initials or fallback icon.",
  },
  {
    category: "Media and icons",
    title: "Icon",
    description:
      "Elevon provides a set of commonly used interface icons you can use in your project",
  },
  {
    category: "Media and icons",
    title: "Image",
    description:
      "The Image component is used to display images with support for fallback.",
  },
  {
    category: "Other",
    title: "Close Button",
    description:
      "Close Button is essentially a button with a close icon. It is used to trigger close functionality in components.",
  },
  {
    category: "Other",
    title: "Portal",
    description: "Renders a component outside the current DOM hierarchy.",
  },
  {
    category: "Other",
    title: "Show / Hide",
    description:
      "Show and Hide wrapper components render or not render the child elements if the media query matches.",
  },
  {
    category: "Other",
    title: "Transitions",
    description:
      "Elevon exports four components `Fade`, `ScaleFade`, `Slide`, and `SlideFade` to provide simple transitions.",
  },
];
