import React from "react";
import { FaDiscord, FaGithub } from "react-icons/fa";
import Dialog from "./Dialog";
import { useTranslation } from "next-i18next";
import { authEnabled } from "../utils/env-helper";

export default function HelpDialog({
  show,
  close,
}: {
  show: boolean;
  close: () => void;
}) {
  const { t } = useTranslation("help");

  return (
    <Dialog
      header={`${t("welcome-to-SYST-auto-AI")} 🤖`}
      isShown={show}
      close={close}
    >
      <div className="text-md relative flex-auto p-2 leading-relaxed">
        <p>
          <strong>yaaagiGPT</strong> {t("usage")} 🚀
        </p>
        <div>
          <br />
          {t("now-working-on")}
          <ul className="ml-5 list-inside list-disc">
            <li>{t("long-term-memory-and-devbase")} 🧠</li>
            <li>{t("web-browsing-beta-launched")} 🌐</li>
            <li>{t("interaction-with-websites-and-people-beta")} 👨‍👩‍👦</li>
          </ul>
          <br />
          )}
          </div>
        </div>
      </div>
    </Dialog>
  );
}
