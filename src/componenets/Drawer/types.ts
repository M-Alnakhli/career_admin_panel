export type ConfigType = {
  name: string;
  icon: () => React.ReactNode;
  label: string;
  action: (...config: any) => any;
};
