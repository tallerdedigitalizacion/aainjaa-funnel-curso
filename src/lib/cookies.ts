export interface ConsentPreferences {
  essential: true;
  analytics: boolean;
  state: "accepted" | "rejected" | "custom";
}

export const defaultConsent: ConsentPreferences = {
  essential: true,
  analytics: false,
  state: "rejected",
};
