import { formConfig } from "@/config/forms";
import type {
  PurchaseFlowResponse,
  PurchaseRequestPayload,
} from "@/types/purchase";

export async function submitPurchaseRequest(
  payload: PurchaseRequestPayload,
): Promise<PurchaseFlowResponse> {
  if (!formConfig.apiUrl) {
    const requestCode = `AAI-${Date.now().toString().slice(-6)}`;
    return {
      ok: true,
      requestCode,
      checkoutUrl: `/${payload.locale}/gracias?status=success`,
    };
  }

  const response = await fetch(formConfig.apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  let data: PurchaseFlowResponse | null = null;
  try {
    data = (await response.json()) as PurchaseFlowResponse;
  } catch {
    data = null;
  }

  if (!response.ok || !data) {
    throw new Error("Purchase request failed.");
  }

  if (!data.ok) {
    throw new Error(data.error || "Purchase request failed.");
  }

  return data;
}
