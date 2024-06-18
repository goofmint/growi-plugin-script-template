import './Hello.css';

export const helloGROWI = (Tag: React.FunctionComponent<any>): React.FunctionComponent<any> => {
  return ({ children, ...props }) => {
    return (
      <Tag {...props}>{children}</Tag>
    );
  };
};
