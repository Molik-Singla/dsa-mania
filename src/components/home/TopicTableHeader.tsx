const TopicTableHeader = () => {
    return (
        <section className="SINGLE_QUESTION grid h-12 min-w-[680px] grid-cols-question justify-items-center gap-2">
            <p className="flex w-full items-center justify-center bg-primary-bg px-1 text-sm">S.No.</p>
            <p className="flex w-full items-center justify-center bg-primary-bg px-1">Action</p>
            <p className="flex w-full items-center justify-center bg-primary-bg px-1">Problems</p>
            <p className="flex w-full items-center justify-center bg-primary-bg px-1">Difficulty</p>
            <p className="flex w-full items-center justify-center bg-primary-bg px-1">Notes</p>
            <p className="flex w-full items-center justify-center bg-primary-bg px-1">Utube</p>
            <p className="flex w-full items-center justify-center bg-primary-bg px-1">Practice</p>
            <p className="flex w-full items-center justify-center bg-primary-bg px-1">Edit</p>
            <p className="flex w-full items-center justify-center bg-primary-bg px-1">Del</p>
        </section>
    );
};
export default TopicTableHeader;
