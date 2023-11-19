import { string } from 'prop-types'
import {
  BookmarkIcon,
  CheckIcon,
  ChecklistIcon,
  CloudIcon,
  CommentIcon,
  EyeIcon,
  GitPullRequestIcon,
  GlobeIcon,
  HubotIcon,
  IssueClosedIcon,
  IssueOpenedIcon,
  MilestoneIcon,
  NoteIcon,
  PackageIcon,
  ProjectIcon,
  RepoForkedIcon,
  RepoPushIcon,
  StopIcon
} from '@primer/octicons-react'

const iconMap = {
  check_run: ChecklistIcon,
  check_suite: ChecklistIcon,
  deployment_status: CloudIcon,
  deployment: CloudIcon,
  fork: RepoForkedIcon,
  installation_repositories: HubotIcon,
  installation: HubotIcon,
  'issues.closed': IssueClosedIcon,
  'issues.opened': IssueOpenedIcon,
  issue_comment: CommentIcon,
  label: BookmarkIcon,
  milestone: MilestoneIcon,
  ping: GlobeIcon,
  project_card: NoteIcon,
  project_column: ProjectIcon,
  project: ProjectIcon,
  pull_request: GitPullRequestIcon,
  push: RepoPushIcon,
  repository_vulnerability_alert: StopIcon,
  status: CheckIcon,
  watch: EyeIcon
}

export default function EventIcon ({
  action,
  event
}) {
  if (action && iconMap[`${event}.${action}`]) {
    return iconMap[`${event}.${action}`]
  } else if (iconMap[event]) {
    return iconMap[event]
  }
  return PackageIcon
}

EventIcon.propTypes = {
  action: string,
  event: string
}
