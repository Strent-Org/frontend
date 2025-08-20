
const Pagination = ({ postPerPage, totalPosts, paginate, currentPage, visiblePages}) => {
    const maxVisiblePages = visiblePages;
      const totalPages = Math.ceil(totalPosts / postPerPage);


      const getVisiblePages = () => {
    const pages = [];
        const windowStart = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    const windowEnd = Math.min(totalPages, windowStart + maxVisiblePages - 1);
        for (let i = windowStart; i <= windowEnd; i++) {
      pages.push(i);
    }
    if (pages[0] > 1) {
      pages.unshift('...');
    }
    if (pages[pages.length - 1] < totalPages) {
      pages.push('...');
    }
    return pages;
  };

  

    return (
    <div>
      <ul className="pagination text-black flex gap-2 justify-center">
        {/* First button, only visible if not on the first page */}
        {/* {currentPage > 1 && (
          <li
            onClick={() => paginate(1)}
            className="py-2 px-4 border border-neutral2 cursor-pointer rounded-lg shadow-sm hover:bg-gray-200 transition"
          >
            First
          </li>
        )} */}

        {/* Previous button */}
        <li
          onClick={() => currentPage === 1 ? '' : paginate(currentPage - 1)}
          className={`py-2 px-4 border border-neutral2 cursor-pointer rounded-lg shadow-sm hover:bg-gray-200 transition ${currentPage === 1 ? 'hidden' : ''}`}
        >
          Previous
        </li>
        
        {/* Loop through the visible pages */}
        {getVisiblePages().map((page, index) => {
          if (page === '...') {
            return (
              <li key={`dots-${index}`} className="py-2 px-4 text-sm font-medium text-gray-500">
                ...
              </li>
            );
          }
          return (
            <li
              key={page}
              onClick={() => paginate(page)}
              className={`py-2 px-4 border cursor-pointer rounded-lg shadow-sm transition ${
                currentPage === page
                  ? 'text-white bg-primary border-blue-500'
                  : 'text-black bg-white border-neutral2 hover:bg-gray-200'
              }`}
            >
              {page}
            </li>
          );
        })}

        {/* Next button */}
        <li
          onClick={() => {  currentPage === totalPages ? '' : paginate(currentPage + 1)}}
          className={`py-2 px-4 border border-neutral2 cursor-pointer rounded-lg shadow-sm hover:bg-gray-200 transition ${currentPage === totalPages ? 'hidden' : ''}`}
        >
          Next
        </li>

        {/* Last button, only visible if not on the last page */}
        {/* {currentPage < totalPages && (
          <li
            onClick={() => {paginate(totalPages)}}
            className="py-2 px-4 border border-neutral2 cursor-pointer rounded-lg shadow-sm hover:bg-gray-200 transition"
          >
            Last
          </li>
        )} */}
      </ul>
    </div>
  );
}

export default Pagination

