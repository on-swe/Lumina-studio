import React, { useState } from "react";
import { Copy, Phone, Mail, Check } from "lucide-react";

// Define a type for contact items
interface ContactItem {
  type: "email" | "phone";
  label: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
}

const ContactInfo: React.FC = () => {
  const [copiedItem, setCopiedItem] = useState<number | null>(null);

  const contactData: ContactItem[] = [
    {
      type: "email",
      label: "Email",
      value: "example@email.com",
      icon: Mail,
    },
    {
      type: "phone",
      label: "Mobile 1",
      value: "+332 476 761 9494",
      icon: Phone,
    },
    {
      type: "phone",
      label: "Mobile 2",
      value: "+332 476 761 9494",
      icon: Phone,
    },
  ];

  const copyToClipboard = async (text: string, index: number) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        // fallback for insecure context or unsupported browsers
        const textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
      setCopiedItem(index);
      setTimeout(() => setCopiedItem(null), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <>
      {contactData.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <div
            key={index}
            className="flex items-center justify-between rounded-lg  w-full z-50"
          >
            <div className="flex items-center space-x-3">
              <IconComponent className="w-5 h-5 text-[#7e22ce]" />
              <div>
                <p className="text-sm font-medium text-gray-500">
                  {item.label}
                </p>
                <p className="text-gray-800 font-medium">{item.value}</p>
              </div>
            </div>

            <button
              onClick={() => copyToClipboard(item.value, index)}
              className="p-2 text-gray-500 hover:text-[#7e22ce] hover:bg-blue-50 rounded-full transition-colors"
              title={`Copy ${item.label} to clipboard`}
              aria-label={`Copy ${item.label} to clipboard`}
              type="button"
            >
              {copiedItem === index ? (
                <Check className="w-5 h-5 text-green-600" />
              ) : (
                <Copy className="w-5 h-5" />
              )}
            </button>
          </div>
        );
      })}
    </>
  );
};

export default ContactInfo;
