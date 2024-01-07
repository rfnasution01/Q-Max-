import { DashboardPaymentGrafic, DashboardPaymentStep } from ".";

export function DashboardPayment() {
  return (
    <div className="my-20 flex flex-col gap-20">
      <h1 className="text-5xl">Payment Proccess</h1>
      <div className="grid grid-cols-12 gap-10">
        <div className="lg:col-span-6 col-span-12 flex flex-col gap-10">
          <DashboardPaymentStep title={"Payment Process"} />
          <DashboardPaymentStep title={"Payment Method"} />
        </div>
        <div className="lg:col-span-6 col-span-12 flex gap-5">
          <DashboardPaymentGrafic />
        </div>
      </div>
    </div>
  );
}
