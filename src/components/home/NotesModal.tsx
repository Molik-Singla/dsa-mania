import ModalLayout from "../ui/ModalLayout";

interface NotesModalProps {
    notes: string;
    onClose?: () => void;
}
const NotesModal = ({ notes, onClose }: NotesModalProps) => {
    return (
        <ModalLayout>
            <section className="flex h-auto w-1/2 min-w-[560px] flex-col gap-5 rounded-lg border border-gray-800 bg-secondary-bg p-8">
                <section className="MODAL_HEADER mb-4 flex w-full items-center justify-between border-b border-gray-500 pb-4 font-semibold">
                    <p className="text-2xl">Notes</p>
                    <section className="flex items-center justify-end gap-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded-md bg-primary-button px-8 py-2 text-sm font-medium transition-all duration-300 hover:bg-secondary-button"
                        >
                            Close
                        </button>
                    </section>
                </section>

                <section>{notes}</section>
            </section>
        </ModalLayout>
    );
};
export default NotesModal;
