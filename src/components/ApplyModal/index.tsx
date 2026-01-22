import CheckIcon from "@/icons/CheckIcon";
import { cn } from "@/lib/utils";
import { Link, Modal } from "@/ui";
import PrimaryButton from "@/ui/PrimaryButton";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const ApplyModal = ({ isOpen, onClose }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div
        className={cn(
          "p-sm gap-sm flex-col flex",
          "md:gap-md md:px-lg md:py-md"
        )}
      >
        <div
          className={cn(
            "font-bold text-title-touch leading-6 max-md:w-[80%]",
            "md:text-title-desktop md:leading-none"
          )}
        >
          Get the Business Funding You Need
        </div>
        <div
          className={cn("grid grid-cols-1 gap-sm", "md:grid-cols-2 md:gap-md")}
        >
          <p className="text-paragraph leading-6">
            Expand your business with a flexible loan tailored to your needs.
            Whether you're investing in new equipment, increasing inventory, or
            boosting cash flow, we offer quick approvals and competitive rates
            to keep your business growing.
          </p>
          <div className="flex flex-col gap-xs">
            <div className="flex gap-xs items-center">
              <CheckIcon className="text-success w-[24px] h-[24px]" />
              <p className="leading-none font-medium">Fast approval process</p>
            </div>
            <div className="flex gap-xs items-center">
              <CheckIcon className="text-success w-[24px] h-[24px]" />
              <p className="leading-none font-medium">
                Flexible repayment terms
              </p>
            </div>
            <div className="flex gap-xs items-center">
              <CheckIcon className="text-success w-[24px] h-[24px]" />
              <p className="leading-none font-medium">
                Competitive interest rates
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-sm max-md:flex-col">
          <PrimaryButton
            title="Apply Now"
            className="max-md:w-full"
            onClick={onClose}
          />
          <Link to="https://finom.co/">More information</Link>
        </div>
      </div>
      <img
        src="/images/coins-currency.png"
        className="absolute right-0 bottom-0 w-[300px] max-md:hidden"
        alt="coins-currency"
      />
    </Modal>
  );
};

export default ApplyModal;
