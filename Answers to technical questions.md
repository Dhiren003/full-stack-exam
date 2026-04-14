# Answers to Technical Questions

## 1. How long did you spend on the coding test? What would you add with more time?

I spent approximately **4–5 hours** on this coding test.

With more time, I would add:

- **Authentication** for the admin panel (basic PHP session auth or JWT)
- **File upload support** for slide images instead of only URLs (using PHP `move_uploaded_file`)
- **Pagination** on the admin tables for large datasets
- **Image lazy loading** for performance
- **Transition animations** between category slider panels (currently instant show/hide)
- **Preloading** of adjacent slide images to prevent flash on navigation
- **Input sanitization/validation** library on the frontend (e.g., jQuery Validate)
- **Soft deletes** (is_deleted flag) rather than hard deletes

---

## 2. How would you track down a performance issue in production?

My approach follows a structured top-down methodology:

1. **Identify the symptom** — I start by understanding what is slow.
For example:

Is the website loading slowly?
Is an API taking too long?
Is the server CPU or memory very high?

I check monitoring tools or server status to see the main symptom.

2. **Browser DevTools** — Use the Network tab to identify slow requests, waterfall bottlenecks, and large asset sizes.

3. **Server logs** — Inspect `error.log` or `debug.log`. If the database is involved, I check the slow query log to find queries that take too long.

4. **Database profiling** — I check if any database queries are slow. If needed, I add indexes to important columns. I also check for problems like too many repeated queries.

5. **PHP profiling** — I use tools like Xdebug to see which functions take the most time. This helps identify slow parts of the code.

6. **Frontend** — Minify/bundle CSS & JS, serve images via CDN, implement lazy loading, reduce render-blocking resources.

---

## 3. Please describe yourself using JSON

```json
{
  "name": "Dhiren Jummani",
  "experience": "4.5 years",
  "designation": "Senior Software Engineer",
  "contact_no": "9574708867",
  "email_id": "dhiren.jummani.jhd@gmail.com",
  "core_skills": {
    "frontend": ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap"],
    "backend": ["PHP", "MySQL", "REST APIs"],
    "tools": ["Git", "VS Code", "Webpack", "Composer", "npm"]
  },
  "traits": [
    "detail_oriented",
    "design_conscious",
    "continuous_learner",
    "debugging"
  ],
  "approach": {
    "problem_solving": "break_down_then_build_up",
    "code_quality": "readable_over_clever",
    "design": "function_first_beauty_always"
  },
  "currently_learning": ["AI", "Docker"],
  "values": {
    "clean_code": true,
    "user_experience": "first_priority",
    "collaboration": "open_and_communicative",
    "deadlines": "respected"
  },
  "outside_of_work": ["sports", "trekking"],
  "available_for_hire": true
}
```
