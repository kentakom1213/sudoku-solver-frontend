import { Field } from "../Field/Field";
import { ResetButton, SubmitButton } from "../Button/Button.stories";

export const Body = ({ props }: { props: Props }) => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center">
        <Field props={props}></Field>
      </div>
      <div className="flex justify-center">
        <ResetButton setter={props.setField} />
        <SubmitButton props={props} />
      </div>
    </div>
  );
};
