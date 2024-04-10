document
  .getElementById("comment-form")
  .addEventListener("submit", async (e) => {
    e.preventDefault();

    const commentBody = document.querySelector(".comment-input").value;
    const post_id = document
      .querySelector("#comment-button")
      .getAttribute("data-post-id");
    try {
      const user_idElement = document.querySelector("#user-id");
      const user_id = user_idElement
        ? user_idElement.getAttribute("data-user-id")
        : null;

      if (!user_id) {
        window.location.href = "/login";
        return;
      }

      const response = await fetch("/api/comments", {
        method: "POST",
        body: JSON.stringify({ commentBody, post_id, user_id }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        location.reload();
      } else {
        // Error handling
        console.error("Comment submission failed");
      }
    } catch (error) {
      console.error("Comment submission failed", error);
    }
  });
