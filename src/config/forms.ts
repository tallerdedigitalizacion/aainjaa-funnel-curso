export const formConfig = {
  apiUrl: process.env.NEXT_PUBLIC_PURCHASE_ENDPOINT || "",
  formKey: process.env.NEXT_PUBLIC_FORM_KEY || "AAINJAA-ORDER-FORM",
  successRedirect: process.env.NEXT_PUBLIC_SUCCESS_REDIRECT || "",
};
