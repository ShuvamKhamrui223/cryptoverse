import Container from "../../../Container";
import List from "../../../components/ui/List";
/* TODO: fetch saved list from firabase or supabase and pass it to list components */
function SavedPage() {
  return (
    <Container>
      <List listHeading={"saved by you"} />
    </Container>
  );
}

export default SavedPage;
