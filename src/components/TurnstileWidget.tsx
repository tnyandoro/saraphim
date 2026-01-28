import { Turnstile } from "@marsidev/react-turnstile";

interface TurnstileWidgetProps {
  onVerify: (token: string) => void;
}

export const TurnstileWidget = ({ onVerify }: TurnstileWidgetProps) => {
  return (
    <Turnstile
      siteKey="YOUR_SITE_KEY_HERE"
      onSuccess={onVerify}
      options={{
        theme: "light", // or 'dark'
        size: "normal", // or 'compact'
      }}
    />
  );
};
