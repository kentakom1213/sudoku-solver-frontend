import { probrem1 } from "@/data/dummy";
import { Field } from "../Field/Field";
import { ResetButton, SubmitButton } from "../Button/Button.stories";

export const Body = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center">
        <Field data={probrem1}></Field>
      </div>
      <div className="my-10 flex justify-center">
        <ResetButton />
        <SubmitButton />
      </div>
    </div>
  );
};
