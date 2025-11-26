(function() {
  const fields = ["K", "Ca", "Mg", "Zn"];
  const resultBox = document.getElementById("result");
  const button = document.getElementById("run-check");

  button.addEventListener("click", function() {
    let allNormal = true;
    const offMinerals = [];

    fields.forEach(id => {
      const value = document.getElementById(id).value;
      if (value !== "normal") {
        allNormal = false;
        offMinerals.push(id);
      }
    });

    resultBox.style.display = "block";

    if (allNormal) {
      resultBox.className = "result ok";
      resultBox.innerHTML = `
        ✅ All selected minerals are within the normal range.<br />
        The logical condition <code>K_normal ∧ Ca_normal ∧ Mg_normal ∧ Zn_normal</code> is TRUE,
        so the theorem infers: <strong>Healthy(X)</strong>.
        <small>This doesn’t replace real diagnostics; it just shows how the logical rule works.</small>
      `;
    } else {
      resultBox.className = "result warn";
      const list = offMinerals.join(", ");
      resultBox.innerHTML = `
        ⚠️ Imbalance detected for: <strong>${list}</strong>.<br />
        At least one predicate is FALSE, so the logical condition is not fully satisfied and we
        cannot infer <strong>Healthy(X)</strong>.
        <small>In a real system this would trigger further rules and suggest targeted investigations.</small>
      `;
    }
  });
})();