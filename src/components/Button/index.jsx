import { Container } from "./style";

export function Button({ title, loading, icon: Icon, ...rest }) {
  return (
    <Container type="button" disabled={loading} {...rest}>
      {Icon && <Icon size={20} />}
      {loading ? "loading" : title}
    </Container>
  );
}
