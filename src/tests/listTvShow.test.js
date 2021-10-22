/**
 * @jest-environment jsdom
 */

import { likeCounter } from '../listTvShow.js';

describe('Adding Likes', () => {
  document.body.innerHTML = ` 
    <div class="tvshow-list-container">
      <div class="tvshow-listcontent">
        <img src="test image" />
      </div>
      <div>
        <h2>test image name</h2>
        <p>0</p>
      </div>
      <button data-id="test" class="btn-comments">Comments</button>
      <button like-id="300" class="btn-likes"><i class="fas fa-heart"></i></button>
    </div>`;

  const getCountLikes = (likeId) => {
    const countNumLikes = document.querySelectorAll(`[like-id="${likeId}"]`)[0]
      .previousElementSibling.previousElementSibling.children[1];
    return Number(countNumLikes.innerHTML);
  };

  const addLikes = (likeId) => {
    const likeDisplay = document.querySelectorAll(`[like-id="${likeId}"]`)[0]
      .previousElementSibling.previousElementSibling.children[1];

    let currentCount = Number(likeDisplay.innerHTML);
    currentCount += 1;
    likeDisplay.innerHTML = currentCount;
  };

  test('should return zero number of likes', () => {
    expect(getCountLikes(300)).toBe(0);
  });

  test('it should show 1 like was added', () => {
    addLikes(300);
    expect(getCountLikes(300)).toBe(1);
  });
});

describe('likeCounter function', () => {
  test('likes are counted correctly', () => {
    // Assign
    const testArray = [{ likes: 4 }];

    // Act
    const testCount = likeCounter(testArray);

    // Assert
    expect(testCount).toBe(4);
  });

  test('There are no likes', () => {
    // Assign
    const testArray = [{ likes: 0 }];

    // Act
    const testCount = likeCounter(testArray);

    // Assert
    expect(testCount).toBe(0);
  });
});
