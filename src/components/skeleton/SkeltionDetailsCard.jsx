import ContentWrapper from "../contentWrapper/ContentWrapper";

const DetailsCardSkeleton = () => {
  return (
    <div className="herobanner w-full relative">
      <div className="banner w-[100%]">
        <div className="h-[98vh] w-[100%] bg-gray-700 animate-pulse"></div>
      </div>

      <div className="wrapper absolute inset-0 flex justify-center items-center">
        <div
          className="Hero w-full h-screen flex justify-center items-center text-white bg-cover bg-center"
          style={{
            background:
              "linear-gradient(to bottom, rgba(4, 21, 45, 0.7), rgba(4, 21, 45, 1))",
          }}
        >
          <ContentWrapper>
            <div className="searchBar text-center px-4 sm:px-6 md:px-10 lg:px-20">
              <div className="w-full h-auto m-2 cursor-pointer py-10 rounded-xl shadow-xl bg-gray-900 bg-opacity-50">
                <div className="flex flex-col md:flex-row justify-between gap-8 p-6">
                  {/* Image Container */}
                  <div className="imageContainer relative w-[500px] md:w-1/3 lg:w-1/4 h-[300px] md:h-[400px] lg:h-[500px] bg-gray-700 animate-pulse rounded-3xl"></div>
                  
                  {/* Details */}
                  <div className="w-full md:w-2/3 lg:w-3/4 flex flex-col justify-center text-center md:text-left">
                    <div className="h-8 md:h-10 lg:h-12 bg-gray-700 animate-pulse rounded mb-4"></div>
                    <div className="h-6 md:h-8 lg:h-10 bg-gray-600 animate-pulse rounded mb-4"></div>
                    
                    <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                      <div className="h-8 w-20 bg-gray-600 animate-pulse rounded"></div>
                      <div className="h-8 w-20 bg-gray-600 animate-pulse rounded"></div>
                      <div className="h-8 w-20 bg-gray-600 animate-pulse rounded"></div>
                    </div>

                    <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                      <div className="rating w-[40px] h-[40px] md:w-[50px] md:h-[50px] lg:w-[70px] lg:h-[70px] bg-gray-600 animate-pulse rounded-full"></div>
                      <div className="playMovie flex justify-center items-center gap-4">
                        <div className="h-10 w-10 bg-gray-600 animate-pulse rounded-full"></div>
                        <div className="h-6 w-40 bg-gray-600 animate-pulse rounded"></div>
                      </div>
                    </div>

                    <div className="overView mb-4 ">
                      <div className="h-8 lg:h-10 bg-gray-700 animate-pulse rounded mb-2"></div>
                      <div className="h-6 md:h-8 lg:h-10 bg-gray-600 animate-pulse rounded"></div>
                      <div className="h-6 md:h-8 lg:h-10 bg-gray-600 animate-pulse rounded"></div>
                      <div className="h-6 md:h-8 lg:h-10 bg-gray-600 animate-pulse rounded"></div>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-4 text-white">
                      <div className="h-6 w-32 bg-gray-600 animate-pulse rounded"></div>
                      <div className="h-6 w-32 bg-gray-600 animate-pulse rounded"></div>
                      <div className="h-6 w-32 bg-gray-600 animate-pulse rounded"></div>
                    </div>

                    <hr />
                  </div>
                </div>
              </div>
            </div>
          </ContentWrapper>
        </div>
      </div>
    </div>
  );
};

export default DetailsCardSkeleton;

