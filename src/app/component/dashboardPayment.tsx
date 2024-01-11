import { DashboardPaymentGrafic, DashboardPaymentStep } from ".";

export function DashboardPayment() {
  return (
    <div className="my-20 flex flex-col gap-20">
      <h1 className="text-5xl">Payment Proccess</h1>
      <div className="grid grid-cols-12 lg:gap-10 md:gap-10 gap-5">
        <div className="lg:col-span-6 col-span-12 flex flex-col lg:gap-10 md:gap-10 gap-5">
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
