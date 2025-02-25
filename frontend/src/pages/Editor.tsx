import AppLayout from "@/components/layouts/layout";
import { Block } from "@blocknote/core";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import { useState } from "react";
import { useTheme } from "@/context/theme-provider";

const breadcrumbs = [
  {
    label: "Home",
  },
];

function Editor() {
  const { theme } = useTheme();

  const [blocks, setBlocks] = useState<Block[]>([]);
  const editor = useCreateBlockNote({
    initialContent: [
      {
        type: "heading",
        content: "",
      },
      {
        type: "paragraph",
        content: "",
      },
    ],
  });

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <div className="flex flex-col">
        <div className="item flex-1 overflow-hidden">
          <BlockNoteView
            theme={theme == "system" ? undefined : theme}
            editor={editor}
            onChange={() => {
              setBlocks(editor.document);
            }}
          />
        </div>
      </div>
    </AppLayout>
  );
}

export default Editor;
