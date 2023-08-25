import React from 'react';

import { Checkbox, DatePicker, Popup } from '~/components';
import {
  getRefetchEmployeeDetails,
  onProfileUpdateError,
  onProfileUpdateSuccess
} from '~/containers/profile/utils';
import { useAddTeamToEmployeesMutation } from '~/hooks/apollo';
import { TeamDetailsProps } from '~/types/employees';

export type EditTeamsPopupProps = {
  closeTeamPopup: () => void;
  employeeId: string;
  onEditSuccess: () => void;
  showDeletePopup: () => void;
  teamToEdit: TeamDetailsProps;
  updateTeamDetails: (detailType: string, value: unknown) => void;
};
const EditTeamsPopup = ({
  closeTeamPopup,
  employeeId,
  onEditSuccess,
  showDeletePopup,
  teamToEdit,
  updateTeamDetails
}: EditTeamsPopupProps) => {
  const [, addTeamToEmployeesMutation] = useAddTeamToEmployeesMutation({
    onSuccess: onProfileUpdateSuccess,
    onFail: onProfileUpdateError,
    refetchQueries: getRefetchEmployeeDetails(employeeId),
    awaitRefetchQueries: true
  });

  const onEditTeamSave = () => {
    if (
      !!teamToEdit.startDate &&
      (!!teamToEdit.endDate  teamToEdit.isActive) &&
      !(
        !teamToEdit.isActive &&
        teamToEdit?.endDate &&
        new Date(teamToEdit.startDate) > new Date(teamToEdit?.endDate)
      ) &&
      teamToEdit?.id
    ) {
      addTeamToEmployeesMutation({
        variables: {
          id: employeeId,
          teamId: teamToEdit?.id,
          startDate: teamToEdit?.startDate?.toLocaleDateString('en-ca'),
          endDate: teamToEdit?.endDate?.toLocaleDateString('en-ca'),
          isCurrent: teamToEdit?.isActive ?? true
        }
      });
      closeTeamPopup();
      onEditSuccess();
    }
  };

  return (
    <Popup
      action="Save"
      title={`Edit Team (${teamToEdit?.name})`}
      onCancel={closeTeamPopup}
      onSave={onEditTeamSave}
      needButton
    >
      <div>
        <div className="w-525px px-1">
          <div className="flex items-center justify-between pb-2">
            <div>
              <span className="font-medium">Start Date</span>
            </div>
            <div className="w-3/4">
              <DatePicker
                selectedDate={
                  teamToEdit?.startDate ? new Date(teamToEdit?.startDate) : null
                }
                onDateChange={(field) => {
                  updateTeamDetails('startDate', field  null);
                }}
                disableFuture
              />
            </div>
          </div>
          {!teamToEdit.isActive && (
            <div className="flex items-center justify-between pb-2">
              <div>
                <span className="font-medium">End Date</span>
              </div>
              <div className="w-3/4">
                <DatePicker
                  selectedDate={
                    teamToEdit?.endDate ? new Date(teamToEdit?.endDate) : null
                  }
                  onDateChange={(field) => {
                    updateTeamDetails('endDate', field  null);
                  }}
                  disableFuture
                />
              </div>
            </div>
          )}
          <div className="m-2 flex justify-between pl-28">
            <Checkbox
              id="current-team-check"
              isChecked={teamToEdit?.isActive ?? false}
              onClick={() =>
                updateTeamDetails('isActive', !teamToEdit.isActive)
              }
              checklabel="Current team"
            />
            <div className="pl-4">
              <button
                className="border-none bg-white text-red-500 opacity-80 outline-none"
                onClick={showDeletePopup}
              >
                Delete Team
              </button>
            </div>
          </div>
        </div>
        {((teamToEdit?.startDate &&
          teamToEdit?.endDate &&
          new Date(teamToEdit.startDate) > new Date(teamToEdit.endDate)) 
          !teamToEdit.startDate) && (
          <div>
            {!teamToEdit.startDate && (
              <div className="pt-1 text-center text-xs text-red-500">