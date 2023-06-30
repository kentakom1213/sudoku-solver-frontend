import { Field } from "../Field/Field";
import { ResetButton, SubmitButton } from "../Button/Button.stories";

export const Body = ({ props }: { props: Props }) => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center">
        <Field data={props.fieldData} setField={props.setField}></Field>
      </div>
      <div className="flex justify-center">
        <ResetButton setter={props.setField} />
        <SubmitButton field={props.fieldData} setField={props.setField} />
      </div>
    </div>
  );
};
