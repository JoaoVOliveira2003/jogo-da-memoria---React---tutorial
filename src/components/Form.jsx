import RegularButton from './RegularButton';

export default function Form({ handleSubmit }) {
  return (
    <form className="wrapper" onSubmit={handleSubmit}>
      <RegularButton handleClick={handleSubmit}>
        Start Game
      </RegularButton>
    </form>
  );
}
