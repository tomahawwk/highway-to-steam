import { Link } from "@/ui";

const MyLinks = () => {
  return (
    <div className="absolute top-md left-md flex gap-sm z-20 max-md:hidden">
      <Link to="https://t.me/tom_ahawk" target="_blank">
        Telegram
      </Link>
      <Link to="https://discord.com/users/367398342361088012" target="_blank">
        Discord
      </Link>
    </div>
  );
};

export default MyLinks;
