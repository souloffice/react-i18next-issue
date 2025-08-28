import { type TransProps, Trans } from "react-i18next";

interface CustomTransProps extends TransProps {
  className?: string;
}

export function CustomTrans(props: CustomTransProps) {
  const { className } = props;

  return <Trans className={className} {...props} />;
}
