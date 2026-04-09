import { formConfig } from "@/config/forms";
import type {
  PurchaseRequestPayload,
  PurchaseRequestResponse,
} from "@/types/purchase";

export async function submitPurchaseRequest(
  payload: PurchaseRequestPayload,
): Promise<PurchaseRequestResponse> {
  if (!formConfig.apiUrl) {
    return {
      ok: true,
      message:
        "No purchase endpoint configured yet. Frontend payload is ready for future backend integration.",
      requestCode: payload.requestCode || `AAI-${Date.now().toString().slice(-6)}`,
      redirectUrl:
        payload.paymentMethodPreferred === "stripe"
          ? undefined
          : formConfig.successRedirect || undefined,
      paymentInstructions:
        payload.paymentMethodPreferred === "manual"
          ? "Manual payment instructions will be returned by the backend in production."
          : undefined,
    };
  }

  const response = await fetch(formConfig.apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  let data: PurchaseRequestResponse | null = null;
  try {
    data = (await response.json()) as PurchaseRequestResponse;
  } catch {
    data = null;
  }

  if (!response.ok || !data) {
    throw new Error(data?.message || "Purchase request failed.");
  }

  return data;
}
