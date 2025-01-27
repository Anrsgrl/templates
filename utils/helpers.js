import toast from "react-hot-toast";

//* Copy to Clipboard
export const copyToClipboard = (text, message) => {
  navigator.clipboard.writeText(text);
  toast(message, {
    icon: "📋",
    style: {
      background: "#333",
      color: "#fff",
    },
  });
};
