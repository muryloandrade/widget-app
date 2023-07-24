import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import "./modal.scss";

interface DialogProps {
  setWidgetSize: (size: string, content: string) => JSX.Element;
}

const DialogDemo: React.FC<DialogProps> = ({ setWidgetSize }: DialogProps) => {
  let size = "";
  let content = "";
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="Button violet">make to widget</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">Widget make</Dialog.Title>
          <Dialog.Description className="DialogDescription">
            Bem-Vindo a criação de modal!
          </Dialog.Description>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="name">
              Conteudo
            </label>
            <select
              className="select"
              onChange={(e) => {
                content = e.target.value;
              }}
            >
              <option value="temp">Temperatura</option>
              <option value="notice">noticia</option>
            </select>
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="username">
              Tamanho
            </label>
            <select
              className="select"
              onChange={(e) => {
                size = e.target.value;
              }}
            >
              <option value="small">Pequeno</option>
              <option value="medium">Medio</option>
              <option value="large">Grande</option>
            </select>
          </fieldset>
          <div
            style={{
              display: "flex",
              marginTop: 25,
              justifyContent: "flex-end",
            }}
          >
            <Dialog.Close asChild>
              <button className="Button green">Criar</button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button
              className="IconButton"
              aria-label="Close"
              onClick={() => setWidgetSize(size, content)}
            >
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default DialogDemo;
