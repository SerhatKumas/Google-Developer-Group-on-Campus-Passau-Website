# Rule 05: Database & CMS Integration Standards

## 1. Service Layer Decoupling
- **UI components must NEVER query the database directly.**
- All queries must flow through `/src/services/*.ts`.
- The service layer switches between mock and live backend via environment variables:
  ```bash
  DATA_SOURCE=mock # or 'api'
  NEXT_PUBLIC_API_BASE_URL=https://api.gdgpassau.de
  ```

## 2. Role-Based Access Control (RBAC) Matrix
The planned GDG Passau Management CMS recognizes 4 core roles:
1. `SUPER_ADMIN` (GDG on Campus Lead & Vice Lead): Full access, member approvals, financial/sponsor records.
2. `TEAM_LEAD` (Technical, Events, Marketing, Community Leads): Create/edit team events, publish recaps, manage squad roster.
3. `CORE_MEMBER`: Internal repository access, task boards, event check-in scanner.
4. `PUBLIC_MEMBER`: RSVP to events, view gallery, submit project proposals.

## 3. GDPR & Privacy Compliance (German DSGVO)
As a student organization at the University of Passau:
- **No telemetry/passwords in logs:** Never log personal email addresses, phone numbers, or passwords.
- **Right to Erasure:** Provide an API endpoint or automated mechanism to delete member accounts and RSVPs upon request.
- **Consent Logging:** Store timestamp and policy version when members submit forms.
