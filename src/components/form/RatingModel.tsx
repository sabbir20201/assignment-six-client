import React from 'react';

const RatingModel = () => {
    return (
        <div>
               <RecipeForm onSubmit={onSubmit}>
                    <div className="flex items-center">
                      <div>
                        <RecipeInput
                          label="Comment"
                          name="comment"
                          type="text"
                        />
                      </div>
                      <div>
                        <Button
                          className="bg-black text-white border-4"
                          type="submit"
                        >
                          Comment
                        </Button>
                      </div>
                    </div>
                  </RecipeForm>
        </div>
    );
};

export default RatingModel;